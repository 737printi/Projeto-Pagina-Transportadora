import type { Testimonial } from "@/types";

/** Depoimentos fictícios — avatares são iniciais com gradiente (sem stock photos) */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mariana Costa",
    role: "Diretora de Operações",
    company: "TechParts Brasil",
    content:
      "A NovaCargo transformou nossa cadeia de suprimentos. Rastreamento em tempo real e SLA cumprido em 99% das entregas no último trimestre.",
    initials: "MC",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    name: "Ricardo Almeida",
    role: "CEO",
    company: "Alimentos do Sul",
    content:
      "Parceria de 5 anos com resultados consistentes. A equipe comercial entende nosso negócio e propõe soluções sob medida.",
    initials: "RA",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "3",
    name: "Fernanda Lima",
    role: "Head de Logística",
    company: "Moda Express",
    content:
      "Entrega expressa impecável durante a Black Friday. Escalamos 300% o volume sem perder qualidade no atendimento.",
    initials: "FL",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "4",
    name: "Carlos Mendes",
    role: "Gerente de Supply Chain",
    company: "Indústria MetalMax",
    content:
      "Dashboard intuitivo e API que integramos ao nosso ERP em uma semana. Visibilidade que não tínhamos antes.",
    initials: "CM",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "5",
    name: "Juliana Rocha",
    role: "COO",
    company: "Farmacêutica Nacional",
    content:
      "Compliance e rastreabilidade para produtos sensíveis. A NovaCargo é referência em logística farmacêutica.",
    initials: "JR",
    gradient: "from-rose-500 to-pink-500",
  },
];
