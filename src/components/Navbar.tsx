"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <header
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border ${
            scrolled
              ? "glass-surface shadow-2xl scale-[0.98] border-border/80"
              : "bg-background/80 backdrop-blur-lg border-border/50 shadow-glass dark:shadow-glass-dark"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-glow">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-foreground flex items-center gap-1">
                {portfolioConfig.profile.shortName}
                <span className="text-blue-500 font-extrabold">.</span>
              </span>
              <span className="text-[10px] text-muted-foreground hidden sm:inline-block leading-none">
                Consultant
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-muted-foreground">
            <Link
              href="/#projects"
              className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-muted/60 transition-all"
            >
              Projects
            </Link>
            <Link
              href="/#services"
              className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-muted/60 transition-all"
            >
              Services
            </Link>
            <Link
              href="/#skills"
              className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-muted/60 transition-all"
            >
              Tech Stack
            </Link>
            <Link
              href="/#process"
              className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-muted/60 transition-all"
            >
              Process
            </Link>
            <Link
              href="/#contact"
              className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-muted/60 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioConfig.profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>WhatsApp</span>
            </a>

            <ThemeToggle />

            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-subtle"
            >
              <span>Hire Suhail</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-muted text-foreground transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 md:hidden glass-surface rounded-3xl p-6 border border-border shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 font-semibold text-sm">
            <Link
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-muted text-foreground"
            >
              Projects &amp; Case Studies
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-muted text-foreground"
            >
              Services &amp; Capabilities
            </Link>
            <Link
              href="/#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-muted text-foreground"
            >
              Tech Stack &amp; Architecture
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-muted text-foreground"
            >
              Engagement Process
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-muted text-foreground"
            >
              Get In Touch
            </Link>

            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href={portfolioConfig.profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-emerald-600 text-white py-2.5 rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat directly on WhatsApp</span>
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-foreground text-background py-2.5 rounded-xl"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
