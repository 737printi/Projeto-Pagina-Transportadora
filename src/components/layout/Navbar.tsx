"use client";

/**
 * Navbar fixa com blur ao scroll, menu mobile (Sheet) e CTA.
 * Client Component: listeners de scroll e estado do menu.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollBlur } from "@/hooks/use-scroll-blur";
import { NAV_LINKS, CTA_LABEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollBlur(20);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const resolveHref = (href: string, isAnchor?: boolean) => {
    if (!isAnchor) return href;
    if (pathname === "/") {
      return href.replace(/^\/?#/, "#");
    }
    return href.startsWith("/") ? href : `/${href}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={resolveHref(link.href, link.isAnchor)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                  pathname === link.href && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
            <Link href="/contato">{CTA_LABEL}</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={resolveHref(link.href, link.isAnchor)}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4" variant="glow">
                  <Link href="/contato" onClick={() => setOpen(false)}>
                    {CTA_LABEL}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
