"use client";

/**
 * Mockup de painel SaaS — gráficos SVG, mapa ilustrativo e analytics.
 * Visual inspirado em dashboards Stripe/Linear.
 */

import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { SECTION_IDS } from "@/lib/constants";
import { CheckCircle2, Clock, MapPin, Truck } from "lucide-react";

const deliveries = [
  { id: "NC-8842", status: "Em trânsito", route: "SP → RJ", progress: 65 },
  { id: "NC-8841", status: "Centro logístico", route: "MG → BA", progress: 45 },
  { id: "NC-8840", status: "Entregue", route: "RS → SC", progress: 100 },
];

export function LogisticsDashboard() {
  return (
    <section
      id={SECTION_IDS.dashboard}
      className="py-20 lg:py-28"
      aria-labelledby="dashboard-heading"
    >
      <Container>
        <SectionHeader
          label="Plataforma"
          title="Controle total da sua operação"
          description="Painel em tempo real com analytics, status e visibilidade de ponta a ponta."
        />

        <ScrollReveal>
          <div className="glass-card glow-border overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-12">
              {/* Sidebar status */}
              <aside className="border-b border-border/60 p-4 lg:col-span-3 lg:border-b-0 lg:border-r">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Entregas ativas
                </p>
                <ul className="space-y-3">
                  {deliveries.map((d) => (
                    <li
                      key={d.id}
                      className="rounded-xl border border-border/50 bg-muted/20 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs">{d.id}</span>
                        <Badge
                          variant={
                            d.progress === 100 ? "success" : "warning"
                          }
                          className="text-[10px]"
                        >
                          {d.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {d.route}
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${d.progress}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Gráfico central */}
              <div className="border-b border-border/60 p-4 lg:col-span-5 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Volume mensal
                </p>
                <p
                  id="dashboard-heading"
                  className="mt-1 text-2xl font-bold"
                >
                  12.4k entregas
                </p>
                <svg
                  viewBox="0 0 400 120"
                  className="mt-4 w-full text-primary"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q50,60 100,70 T200,50 T300,40 T400,30 L400,120 L0,120 Z"
                    fill="url(#chartGrad)"
                  />
                  <path
                    d="M0,80 Q50,60 100,70 T200,50 T300,40 T400,30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: Truck, label: "Frota ativa", value: "128" },
                    { icon: Clock, label: "Tempo médio", value: "2.4d" },
                    { icon: CheckCircle2, label: "SLA", value: "98%" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-border/50 p-2 text-center"
                    >
                      <Icon className="mx-auto h-4 w-4 text-primary" />
                      <p className="mt-1 text-lg font-bold">{value}</p>
                      <p className="text-[10px] text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa ilustrativo */}
              <div className="p-4 lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Rede nacional
                </p>
                <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-border/50 bg-muted/20">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 gap-px opacity-30">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="bg-border/40" />
                    ))}
                  </div>
                  {[
                    { top: "25%", left: "35%" },
                    { top: "45%", left: "55%" },
                    { top: "60%", left: "40%" },
                    { top: "30%", left: "70%" },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute flex items-center justify-center"
                      style={pos}
                    >
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                        <MapPin className="relative h-4 w-4 text-primary" />
                      </span>
                    </div>
                  ))}
                  <div className="absolute bottom-2 left-2 rounded-lg bg-background/80 px-2 py-1 text-[10px] backdrop-blur">
                    24 estados · 12 hubs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
