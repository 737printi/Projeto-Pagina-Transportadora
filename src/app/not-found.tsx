import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

/**
 * Página 404 — mantém identidade visual e navegação clara.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container className="text-center">
        <p className="font-mono text-8xl font-bold text-primary/30">404</p>
        <h1 className="mt-4 text-3xl font-bold">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          A rota que você buscou não existe ou foi movida. Volte ao início ou
          rastreie uma carga.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="glow">
            <Link href="/">
              <Home className="h-4 w-4" />
              Página inicial
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/rastreamento">
              <Search className="h-4 w-4" />
              Rastrear carga
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
