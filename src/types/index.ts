import type { LucideIcon } from "lucide-react";

/** Link de navegação principal */
export interface NavLink {
  label: string;
  href: string;
  /** Se true, usa âncora na home (#secao) */
  isAnchor?: boolean;
}

/** Card de serviço ou diferencial */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
}

/** Métrica exibida com contador animado */
export interface MetricItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
  decimals?: number;
}

/** Depoimento de cliente B2B */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
  gradient: string;
}

/** Status da timeline de rastreamento */
export interface TrackingStep {
  id: string;
  label: string;
  description: string;
  date: string;
  completed: boolean;
  active: boolean;
}

/** Resultado mock de rastreamento */
export interface TrackingResult {
  code: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  steps: TrackingStep[];
}

/** Valor institucional (missão, visão, valores) */
export interface AboutValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Item de FAQ */
export interface FaqItem {
  question: string;
  answer: string;
}
