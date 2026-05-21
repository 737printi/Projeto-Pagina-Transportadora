import type { TrackingResult, TrackingStep } from "@/types";

/**
 * Simula consulta de rastreamento — didático, sem backend.
 * Códigos com 6+ caracteres retornam timeline fictícia consistente.
 */

const STEP_TEMPLATES: Omit<TrackingStep, "completed" | "active">[] = [
  {
    id: "collected",
    label: "Coletado",
    description: "Carga recebida no centro de origem",
    date: "18/05/2026 — 08:30",
  },
  {
    id: "transit",
    label: "Em transporte",
    description: "Veículo em rota para hub regional",
    date: "19/05/2026 — 14:15",
  },
  {
    id: "hub",
    label: "Centro logístico",
    description: "Processamento e triagem no CD",
    date: "20/05/2026 — 06:00",
  },
  {
    id: "out",
    label: "Saiu para entrega",
    description: "Última milha — entregador designado",
    date: "20/05/2026 — 11:45",
  },
  {
    id: "delivered",
    label: "Entregue",
    description: "Recebido por: Almoxarifado Central",
    date: "20/05/2026 — 16:20",
  },
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function validateTrackingCode(code: string): boolean {
  const trimmed = code.trim();
  return trimmed.length >= 6;
}

/**
 * Gera resultado mock com progresso parcial baseado no código.
 * Permite demonstrar diferentes estados na aula.
 */
export function getTrackingResult(code: string): TrackingResult | null {
  if (!validateTrackingCode(code)) return null;

  const hash = hashCode(code.trim().toUpperCase());
  const progressIndex = hash % 5;

  const steps: TrackingStep[] = STEP_TEMPLATES.map((step, index) => ({
    ...step,
    completed: index < progressIndex,
    active: index === progressIndex,
  }));

  if (progressIndex >= 4) {
    steps[4] = { ...steps[4], completed: true, active: false };
  }

  const cities = [
    ["São Paulo, SP", "Curitiba, PR"],
    ["Rio de Janeiro, RJ", "Belo Horizonte, MG"],
    ["Porto Alegre, RS", "Florianópolis, SC"],
    ["Brasília, DF", "Goiânia, GO"],
  ];
  const [origin, destination] = cities[hash % cities.length];

  return {
    code: code.trim().toUpperCase(),
    origin,
    destination,
    estimatedDelivery: progressIndex >= 4 ? "Entregue" : "21/05/2026",
    steps,
  };
}

export const DEMO_TRACKING_CODES = ["NC2026001", "NCLOG12345", "DEMO2026"];
