import Link from "next/link";
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

interface LogoProps {
  className?: string;
  showSuffix?: boolean;
}

/**
 * Logo tipográfico minimalista — sem imagem externa para performance e didática.
 */
export function Logo({ className, showSuffix = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${COMPANY.name} ${COMPANY.suffix} — Página inicial`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Truck className="h-5 w-5" aria-hidden />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight">
          {COMPANY.name}
        </span>
        {showSuffix && (
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            {COMPANY.suffix}
          </span>
        )}
      </div>
    </Link>
  );
}
