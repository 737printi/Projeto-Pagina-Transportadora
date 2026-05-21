"use client";

/**
 * CTA final — gradientes, glow e headline de conversão.
 */

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { SECTION_IDS, CTA_LABEL } from "@/lib/constants";

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.cta}
      className="py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 via-background to-cyan-500/10 px-8 py-16 text-center shadow-glow sm:px-16"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-12 right-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-[60px]" />

          <h2
            id="cta-heading"
            className="relative text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Pronto para modernizar sua logística?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
            Fale com nosso time comercial e receba uma proposta personalizada em
            até 24 horas.
          </p>
          <Button
            asChild
            size="lg"
            variant="glow"
            className="relative mt-8"
          >
            <Link href="/contato">
              {CTA_LABEL}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
