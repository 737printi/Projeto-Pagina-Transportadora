import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com a ${COMPANY.name}. Solicite cotação para logística B2B.`,
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Fale conosco"
        description="Nossa equipe comercial está pronta para entender sua operação e propor a melhor solução."
      />
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold">Informações</h2>
              <ul className="mt-6 space-y-6">
                {[
                  { icon: MapPin, label: "Endereço", value: COMPANY.address },
                  { icon: Phone, label: "Telefone", value: COMPANY.phone },
                  { icon: Mail, label: "E-mail", value: COMPANY.email },
                  {
                    icon: Clock,
                    label: "Horário",
                    value: "Seg–Sex, 8h–18h · Suporte 24h para clientes",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
