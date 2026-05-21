import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { TrackingSection } from "@/components/sections/TrackingSection";

export const metadata: Metadata = {
  title: "Rastreamento",
  description:
    "Rastreie sua carga em tempo real com o código de rastreio NovaCargo.",
};

export default function RastreamentoPage() {
  return (
    <>
      <PageHero
        title="Rastreamento de cargas"
        description="Acompanhe cada etapa da sua entrega com visibilidade total e atualizações em tempo real."
      />
      <TrackingSection expanded />
    </>
  );
}
