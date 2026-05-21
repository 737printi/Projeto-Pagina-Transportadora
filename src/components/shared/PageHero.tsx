import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

/** Hero compacto para páginas internas */
export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative border-b border-border/40 bg-mesh pt-28 pb-16",
        className
      )}
    >
      <Container>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </Container>
    </section>
  );
}
