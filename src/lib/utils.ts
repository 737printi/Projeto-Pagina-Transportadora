import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes Tailwind sem conflitos — padrão shadcn/ui.
 * clsx resolve condicionais; tailwind-merge prioriza a última utilidade válida.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
