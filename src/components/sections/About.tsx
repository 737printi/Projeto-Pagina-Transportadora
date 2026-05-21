"use client";

/**
 * Seção institucional — missão, visão, valores e badges de confiança.
 */

import { aboutValues, trustBadges } from "@/data/about";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { SECTION_IDS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="py-20 lg:py-28"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              label="Sobre"
              title="Uma década movendo o Brasil"
              description="A NovaCargo nasceu da visão de unir tecnologia e logística rodoviária para empresas que exigem excelência operacional."
            />

            <p className="mb-6 text-muted-foreground">
              {COMPANY.slogan} Atuamos em transporte rodoviário, logística
              empresarial, entregas expressas e rastreamento B2B — sempre com
              foco em transparência e resultados mensuráveis.
            </p>

            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="relative">
              <Illustration />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {aboutValues.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={cn(
                        "glass-card p-4",
                        i === 2 && "sm:col-span-3 lg:col-span-1"
                      )}
                    >
                      <Icon className="mb-2 h-5 w-5 text-primary" />
                      <h3
                        id={i === 0 ? "about-heading" : undefined}
                        className="font-semibold"
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function Illustration() {
  return (
    <div className="glass-card glow-border relative aspect-[4/3] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <rect
          x="50"
          y="120"
          width="200"
          height="80"
          rx="8"
          className="fill-primary/20 stroke-primary/40"
          strokeWidth="2"
        />
        <rect x="60" y="130" width="60" height="50" rx="4" className="fill-muted" />
        <circle cx="90" cy="210" r="20" className="fill-muted stroke-border" strokeWidth="2" />
        <circle cx="210" cy="210" r="20" className="fill-muted stroke-border" strokeWidth="2" />
        <path
          d="M260 150 L340 150 L360 180 L340 210 L260 210 Z"
          className="fill-primary/30 stroke-primary"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="250"
          x2="400"
          y2="250"
          className="stroke-border"
          strokeWidth="1"
          strokeDasharray="8 4"
        />
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-muted-foreground">
        <span>Rede nacional</span>
        <span className="font-mono text-primary">BR-LOG-2026</span>
      </div>
    </div>
  );
}
