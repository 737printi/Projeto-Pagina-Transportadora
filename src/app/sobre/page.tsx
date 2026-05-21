import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { aboutValues, timeline, team, trustBadges } from "@/data/about";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";
import { FinalCta } from "@/components/sections/FinalCta";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a ${COMPANY.name} — ${COMPANY.slogan} Há 15 anos conectando empresas em todo o Brasil.`,
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre a NovaCargo"
        description={COMPANY.description}
      />
      <section className="py-16">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {trustBadges.map((b) => (
              <Badge key={b} variant="secondary">
                {b}
              </Badge>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {aboutValues.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card p-6 text-center">
                  <Icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <h2 className="mt-20 text-center text-2xl font-bold">Nossa história</h2>
          <div className="mx-auto mt-12 max-w-2xl space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="flex gap-6 border-l-2 border-primary/30 pl-6"
              >
                <p className="shrink-0 font-mono text-lg font-bold text-primary">
                  {item.year}
                </p>
                <p className="text-muted-foreground">{item.event}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 text-center text-2xl font-bold">Liderança</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-border/60 p-6 text-center"
              >
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white",
                    member.gradient
                  )}
                >
                  {member.initials}
                </div>
                <p className="mt-4 font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
