import type { NavLink } from "@/types";

/** Dados centrais da marca — única fonte de verdade para textos institucionais */
export const COMPANY = {
  name: "NovaCargo",
  suffix: "Logistics",
  slogan: "Movendo negócios com inteligência.",
  description:
    "Soluções modernas em transporte rodoviário, logística empresarial e rastreamento de cargas para empresas em todo o Brasil.",
  email: "contato@novacargo.com.br",
  phone: "+55 (11) 4000-2020",
  address: "Av. Paulista, 1000 — Bela Vista, São Paulo — SP, 01310-100",
  cnpj: "00.000.000/0001-00",
} as const;

/** Links da navbar — âncoras na home, rotas nas páginas internas */
export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "/", isAnchor: false },
  { label: "Serviços", href: "/servicos", isAnchor: false },
  { label: "Rastreamento", href: "/rastreamento", isAnchor: false },
  { label: "Sobre", href: "/sobre", isAnchor: false },
  { label: "Depoimentos", href: "/#depoimentos", isAnchor: true },
  { label: "Contato", href: "/contato", isAnchor: false },
];

export const CTA_LABEL = "Solicitar Cotação";

/** IDs de seção para âncoras na landing page */
export const SECTION_IDS = {
  hero: "inicio",
  metrics: "metricas",
  services: "servicos",
  dashboard: "painel",
  tracking: "rastreamento",
  about: "sobre",
  testimonials: "depoimentos",
  differentiators: "diferenciais",
  cta: "cotacao",
} as const;

/** SEO padrão — herdado pelo layout e sobrescrito por páginas */
export const DEFAULT_METADATA = {
  title: "NovaCargo Logistics",
  titleTemplate: "%s | NovaCargo",
  description: `${COMPANY.slogan} Transporte rodoviário, logística B2B e rastreamento em tempo real para todo o Brasil.`,
  keywords: [
    "logística",
    "transporte rodoviário",
    "rastreamento de cargas",
    "logística empresarial",
    "entrega expressa",
    "B2B",
    "distribuição nacional",
  ],
  siteUrl: "https://novacargo.com.br",
} as const;
