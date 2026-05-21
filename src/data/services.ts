import {
  Truck,
  Zap,
  MapPin,
  Building2,
  Globe,
  Car,
} from "lucide-react";
import type { ServiceItem } from "@/types";

/** Serviços exibidos na home e na página /servicos */
export const services: ServiceItem[] = [
  {
    id: "rodoviario",
    title: "Transporte Rodoviário",
    description:
      "Frota moderna e rotas otimizadas para cargas fracionadas e lotação em todo território nacional.",
    icon: Truck,
    features: [
      "Cobertura em 24 estados",
      "Rotas otimizadas por IA",
      "Seguro de carga incluso",
    ],
  },
  {
    id: "expressa",
    title: "Entrega Expressa",
    description:
      "SLA garantido para entregas urgentes com prioridade em hubs estratégicos.",
    icon: Zap,
    features: [
      "Entrega em até 24h",
      "Prioridade em hubs",
      "Notificações em tempo real",
    ],
  },
  {
    id: "rastreamento",
    title: "Rastreamento em Tempo Real",
    description:
      "Visibilidade completa da carga com atualizações a cada marco logístico.",
    icon: MapPin,
    features: [
      "Dashboard 24/7",
      "Alertas proativos",
      "API para ERP",
    ],
  },
  {
    id: "empresarial",
    title: "Logística Empresarial",
    description:
      "Operação dedicada B2B com gestor de conta e KPIs personalizados.",
    icon: Building2,
    features: [
      "Gestor dedicado",
      "Relatórios mensais",
      "Contratos flexíveis",
    ],
  },
  {
    id: "distribuicao",
    title: "Distribuição Nacional",
    description:
      "Rede de cross-docking integrada para distribuição em escala.",
    icon: Globe,
    features: [
      "12 centros de distribuição",
      "Cross-docking",
      "Last mile integrado",
    ],
  },
  {
    id: "frota",
    title: "Gestão de Frotas",
    description:
      "Telemetria, manutenção preventiva e compliance para frotas corporativas.",
    icon: Car,
    features: [
      "Telemetria avançada",
      "Manutenção preventiva",
      "Compliance total",
    ],
  },
];
