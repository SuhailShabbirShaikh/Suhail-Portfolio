"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
            {portfolioConfig.profile.shortName || portfolioConfig.profile.name}
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for hire</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/#skills" className="hover:text-foreground transition-colors">
            Tech Stack
          </Link>
          <Link href="/#process" className="hover:text-foreground transition-colors">
            Process
          </Link>
          <Link href="/#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action & Theme */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity shadow-subtle"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-border text-foreground hover:bg-muted"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-6 space-y-4">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {portfolioConfig.profile.availabilityStatus}
          </div>
          <div className="flex flex-col space-y-3 text-base font-medium">
            <Link
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-blue-600 py-1"
            >
              Projects & Case Studies
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-blue-600 py-1"
            >
              Services & Capabilities
            </Link>
            <Link
              href="/#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-blue-600 py-1"
            >
              Tech Stack & Architecture
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-blue-600 py-1"
            >
              Delivery Process
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-blue-600 py-1"
            >
              Get in Touch
            </Link>
          </div>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-foreground text-background py-2.5 rounded-xl shadow-subtle"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
