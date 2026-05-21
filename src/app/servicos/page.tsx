import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";
import { faqItems } from "@/data/about";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Transporte rodoviário, entrega expressa, rastreamento e logística B2B — conheça as soluções NovaCargo.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Nossos serviços"
        description="Soluções integradas de logística para empresas que buscam eficiência, visibilidade e escala nacional."
      />
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 0.05}>
                  <article className="glass-card p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="mt-3 text-muted-foreground">
                      {service.description}
                    </p>
                    {service.features && (
                      <ul className="mt-6 space-y-2">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="mx-auto max-w-2xl">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
