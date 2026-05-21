"use client";

/**
 * Carrossel de depoimentos — Embla via shadcn Carousel.
 */

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section
      id={SECTION_IDS.testimonials}
      className="border-y border-border/40 bg-muted/20 py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeader
          label="Depoimentos"
          title="O que nossos parceiros dizem"
          description="Empresas de diversos setores confiam na NovaCargo para suas operações críticas."
        />

        <div className="relative px-8 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-border/60 transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col p-6">
                      <Quote className="mb-4 h-8 w-8 text-primary/40" />
                      <p
                        id={index === 0 ? "testimonials-heading" : undefined}
                        className="flex-1 text-sm leading-relaxed text-muted-foreground"
                      >
                        &ldquo;{item.content}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                            item.gradient
                          )}
                        >
                          {item.initials}
                        </div>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.role} · {item.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
