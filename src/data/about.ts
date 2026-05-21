import { Target, Eye, Heart } from "lucide-react";
import type { AboutValue, FaqItem } from "@/types";

export const aboutValues: AboutValue[] = [
  {
    title: "Missão",
    description:
      "Conectar empresas brasileiras através de logística inteligente, segura e sustentável, impulsionando o crescimento dos nossos parceiros.",
    icon: Target,
  },
  {
    title: "Visão",
    description:
      "Ser a transportadora B2B mais confiável e tecnológica da América Latina até 2030.",
    icon: Eye,
  },
  {
    title: "Valores",
    description:
      "Transparência, inovação, segurança, sustentabilidade e compromisso com resultados mensuráveis.",
    icon: Heart,
  },
];

export const trustBadges = [
  "15 anos de mercado",
  "ISO 9001 (fictício)",
  "24 estados",
  "+500 clientes B2B",
] as const;

export const timeline = [
  { year: "2011", event: "Fundação em São Paulo com 5 veículos" },
  { year: "2015", event: "Expansão para 12 estados e primeiro CD" },
  { year: "2019", event: "Plataforma de rastreamento em tempo real" },
  { year: "2022", event: "Integração API e parcerias enterprise" },
  { year: "2026", event: "24 estados e +12.000 entregas mensais" },
] as const;

export const team = [
  { name: "Ana Paula Silva", role: "CEO", initials: "AS", gradient: "from-blue-500 to-indigo-500" },
  { name: "Bruno Ferreira", role: "CTO", initials: "BF", gradient: "from-cyan-500 to-blue-500" },
  { name: "Camila Dias", role: "COO", initials: "CD", gradient: "from-violet-500 to-purple-500" },
  { name: "Diego Martins", role: "Diretor Comercial", initials: "DM", gradient: "from-emerald-500 to-teal-500" },
] as const;

export const faqItems: FaqItem[] = [
  {
    question: "Qual o prazo para cotação?",
    answer:
      "Retornamos em até 24 horas úteis com proposta personalizada para sua operação.",
  },
  {
    question: "Atendem todo o Brasil?",
    answer:
      "Sim, com cobertura em 24 estados e parceiros estratégicos nos demais.",
  },
  {
    question: "Como funciona o rastreamento?",
    answer:
      "Cada carga recebe um código único. Acompanhe em tempo real pelo site ou API.",
  },
  {
    question: "Oferecem seguro de carga?",
    answer:
      "Sim, seguro incluso em todas as modalidades com cobertura configurável.",
  },
  {
    question: "Integram com ERP?",
    answer:
      "API REST documentada, webhooks e conectores para os principais ERPs do mercado.",
  },
];
