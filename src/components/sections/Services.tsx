"use client";

/**
 * Grid de serviços — dados em /data/services.ts, UI com hover e ícones.
 */

import { services } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      className="border-y border-border/40 bg-muted/20 py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <SectionHeader
          label="Serviços"
          title="Soluções completas para sua cadeia logística"
          description="Do transporte rodoviário à gestão de frotas — tudo integrado em uma plataforma."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.06}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6",
                    "transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                  )}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    id={index === 0 ? "services-heading" : undefined}
                    className="text-lg font-semibold"
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href="/servicos"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Saiba mais
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
