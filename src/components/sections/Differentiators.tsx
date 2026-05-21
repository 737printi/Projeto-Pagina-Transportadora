"use client";

/**
 * Grade de diferenciais competitivos.
 */

import { differentiators } from "@/data/differentiators";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";

export function Differentiators() {
  return (
    <section
      id={SECTION_IDS.differentiators}
      className="py-20 lg:py-28"
      aria-labelledby="diff-heading"
    >
      <Container>
        <SectionHeader
          label="Diferenciais"
          title="Por que escolher a NovaCargo?"
          description="Tecnologia, segurança e escala para operações que não podem parar."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={index * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 transition-colors hover:bg-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3
                      id={index === 0 ? "diff-heading" : undefined}
                      className="font-semibold"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
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
