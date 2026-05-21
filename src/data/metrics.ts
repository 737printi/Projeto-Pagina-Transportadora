import { Package, Star, MapPin, Award } from "lucide-react";
import type { MetricItem } from "@/types";

/** Métricas da seção de números — valores animados na home */
export const metrics: MetricItem[] = [
  {
    id: "deliveries",
    value: 12000,
    prefix: "+",
    label: "entregas realizadas",
    icon: Package,
    decimals: 0,
  },
  {
    id: "satisfaction",
    value: 98,
    suffix: "%",
    label: "satisfação dos clientes",
    icon: Star,
    decimals: 0,
  },
  {
    id: "states",
    value: 24,
    label: "estados atendidos",
    icon: MapPin,
    decimals: 0,
  },
  {
    id: "experience",
    value: 15,
    label: "anos de experiência",
    icon: Award,
    decimals: 0,
  },
];
