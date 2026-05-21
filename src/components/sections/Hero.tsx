"use client";

/**
 * Hero premium — headline, CTAs, stats animados e mockup de dashboard.
 * Client Component: Framer Motion + animações stagger.
 */

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Package, TrendingUp, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const heroStats = [
  { value: 12000, prefix: "+", label: "Entregas" },
  { value: 98, suffix: "%", label: "SLA" },
  { value: 24, label: "Estados" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen overflow-hidden pt-24 pb-20 lg:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
                <TrendingUp className="h-3 w-3" />
                Logística B2B de alta performance
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Logística inteligente para empresas que querem{" "}
              <span className="text-gradient-primary">crescer.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted-foreground"
            >
              Soluções modernas em transporte, rastreamento e distribuição para
              todo o Brasil.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button asChild size="lg" variant="glow">
                <Link href="/contato">
                  Solicitar Cotação
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/rastreamento">Rastrear Pedido</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <FloatingCard
              className="absolute -left-4 top-8 z-10 hidden sm:block"
              icon={Truck}
              title="Em trânsito"
              subtitle="SP → PR"
              delay={0}
            />
            <FloatingCard
              className="absolute -right-2 bottom-24 z-10 hidden md:block"
              icon={Package}
              title="Entregue"
              subtitle="Ontem, 16:20"
              delay={0.5}
            />
            <DashboardMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function FloatingCard({
  className,
  icon: Icon,
  title,
  subtitle,
  delay,
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay }}
      className={cn("glass-card glow-border px-4 py-3 shadow-lg", className)}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

function DashboardMockup() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 68];

  return (
    <div className="glass-card glow-border overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400/80" />
        <div className="h-3 w-3 rounded-full bg-amber-400/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-xs text-muted-foreground">
          painel.novacargo.app
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Operações
            </p>
            <p className="text-lg font-semibold">Dashboard Logístico</p>
          </div>
          <Badge variant="success">Ao vivo</Badge>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2">
          {[
            { label: "Entregas hoje", value: "847" },
            { label: "Em trânsito", value: "234" },
            { label: "SLA", value: "98.2%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/50 bg-muted/30 p-2"
            >
              <p className="text-[10px] text-muted-foreground">{item.label}</p>
              <p className="text-sm font-bold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex h-32 items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-primary/80 to-primary/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
