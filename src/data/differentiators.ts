import {
  Headphones,
  Radar,
  Shield,
  Map,
  Cpu,
  Timer,
} from "lucide-react";
import type { ServiceItem } from "@/types";

/** Diferenciais competitivos — grade na home */
export const differentiators: ServiceItem[] = [
  {
    id: "support",
    title: "Atendimento 24h",
    description: "Suporte dedicado para operações críticas, todos os dias.",
    icon: Headphones,
  },
  {
    id: "tracking",
    title: "Rastreamento Inteligente",
    description: "IA preditiva para ETA e alertas proativos de exceção.",
    icon: Radar,
  },
  {
    id: "fleet",
    title: "Frota Segura",
    description: "Monitoramento, seguro e motoristas certificados.",
    icon: Shield,
  },
  {
    id: "coverage",
    title: "Cobertura Nacional",
    description: "24 estados com rede de hubs estrategicamente posicionados.",
    icon: Map,
  },
  {
    id: "tech",
    title: "Tecnologia Avançada",
    description: "Plataforma SaaS com API, webhooks e integrações ERP.",
    icon: Cpu,
  },
  {
    id: "speed",
    title: "Entrega Ágil",
    description: "Rotas dinâmicas e cross-docking para reduzir lead time.",
    icon: Timer,
  },
];
