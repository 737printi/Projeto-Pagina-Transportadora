"use client";

/**
 * Seção de métricas — cards com contadores animados e hover premium.
 */

import { metrics } from "@/data/metrics";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Metrics() {
  return (
    <section
      id={SECTION_IDS.metrics}
      className="py-20 lg:py-28"
      aria-labelledby="metrics-heading"
    >
      <Container>
        <SectionHeader
          label="Números"
          title="Resultados que falam por si"
          description="Métricas reais de uma operação em escala nacional."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <ScrollReveal key={metric.id} delay={index * 0.08}>
                <div
                  className={cn(
                    "group glass-card flex flex-col gap-4 p-6 transition-all duration-300",
                    "hover:scale-[1.02] hover:border-primary/30 hover:shadow-glow-sm"
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p
                      id="metrics-heading"
                      className="text-3xl font-bold tracking-tight"
                    >
                      <AnimatedCounter
                        value={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                      />
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
