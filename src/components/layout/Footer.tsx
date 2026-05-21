import Link from "next/link";
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const footerLinks = {
  empresa: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Contato", href: "/contato" },
  ],
  solucoes: [
    { label: "Rastreamento", href: "/rastreamento" },
    { label: "Logística B2B", href: "/servicos" },
    { label: "Entrega Expressa", href: "/servicos" },
    { label: "Gestão de Frotas", href: "/servicos" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const social = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

/**
 * Footer completo — Server Component estático para SEO e performance.
 */
export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {COMPANY.description}
            </p>
            <p className="mt-2 text-xs text-muted-foreground italic">
              {COMPANY.slogan}
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Soluções</h3>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-foreground">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-foreground"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name} {COMPANY.suffix}. Todos os
            direitos reservados. CNPJ: {COMPANY.cnpj}
          </p>
          <ul className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
