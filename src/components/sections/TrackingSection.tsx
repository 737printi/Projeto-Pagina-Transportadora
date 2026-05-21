"use client";

/**
 * Rastreamento interativo — mock com loading skeleton e timeline animada.
 * Lógica de negócio em lib/tracking-mock.ts (separação didática).
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Package, AlertCircle, Check } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  getTrackingResult,
  validateTrackingCode,
  DEMO_TRACKING_CODES,
} from "@/lib/tracking-mock";
import type { TrackingResult } from "@/types";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TrackingSectionProps {
  expanded?: boolean;
}

export function TrackingSection({ expanded = false }: TrackingSectionProps) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async () => {
    setError(null);
    setResult(null);

    if (!validateTrackingCode(code)) {
      setError("Digite um código válido com pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    const data = getTrackingResult(code);
    setLoading(false);

    if (data) setResult(data);
    else setError("Código não encontrado. Tente novamente.");
  };

  return (
    <section
      id={SECTION_IDS.tracking}
      className={cn(
        "border-y border-border/40 bg-muted/20 py-20 lg:py-28",
        expanded && "border-0 bg-transparent"
      )}
      aria-labelledby="tracking-heading"
    >
      <Container>
        <SectionHeader
          label="Rastreamento"
          title="Acompanhe sua carga em tempo real"
          description={
            expanded
              ? "Insira o código de rastreio recebido no momento da coleta. Exemplos para teste:"
              : "Digite o código de rastreio e visualize o status da entrega."
          }
        />

        {expanded && (
          <p className="-mt-8 mb-8 text-center text-sm text-muted-foreground">
            Códigos demo:{" "}
            {DEMO_TRACKING_CODES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCode(c)}
                className="mx-1 font-mono text-primary hover:underline"
              >
                {c}
              </button>
            ))}
          </p>
        )}

        <div className="mx-auto max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Digite seu código de rastreio"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              aria-label="Código de rastreio"
              className="flex-1"
            />
            <Button
              onClick={handleTrack}
              disabled={loading}
              variant="glow"
              className="sm:min-w-[140px]"
            >
              <Search className="h-4 w-4" />
              Rastrear
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-4 w-4" />
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {loading && (
            <Card className="mt-8">
              <CardContent className="space-y-4 p-6 pt-6">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          )}

          <AnimatePresence>
            {result && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <TrackingResultCard result={result} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

function TrackingResultCard({ result }: { result: TrackingResult }) {
  return (
    <Card className="mt-8 glow-border">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Código</p>
            <p
              id="tracking-heading"
              className="font-mono text-lg font-bold"
            >
              {result.code}
            </p>
          </div>
          <Badge variant="secondary">
            Previsão: {result.estimatedDelivery}
          </Badge>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Origem: </span>
            <span className="font-medium">{result.origin}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Destino: </span>
            <span className="font-medium">{result.destination}</span>
          </div>
        </div>

        <ol className="relative mt-8 space-y-0 border-l border-border pl-8">
          {result.steps.map((step, index) => (
            <li key={step.id} className="relative pb-8 last:pb-0">
              <span
                className={cn(
                  "absolute -left-[25px] flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background",
                  step.completed && "border-primary bg-primary text-primary-foreground",
                  step.active && "border-primary ring-4 ring-primary/20",
                  !step.completed && !step.active && "border-muted"
                )}
              >
                {step.completed ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Package className="h-3.5 w-3.5" />
                )}
              </span>
              <div
                className={cn(
                  step.active && "rounded-xl border border-primary/30 bg-primary/5 p-3 -ml-3 pl-3"
                )}
              >
                <p className="font-semibold">{step.label}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{step.date}</p>
              </div>
              {index < result.steps.length - 1 && (
                <div
                  className={cn(
                    "absolute -left-px top-8 h-full w-0.5",
                    step.completed ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
