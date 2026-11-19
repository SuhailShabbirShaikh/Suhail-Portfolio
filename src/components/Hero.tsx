"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap, Terminal } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Hero() {
  const { profile } = portfolioConfig;

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-border/60">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-foreground mb-6 shadow-subtle">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span>Senior Software Engineer &amp; Product Consultant</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12] mb-6">
            Building scalable digital products that drive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
              real business revenue.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Hi, I&apos;m <span className="text-foreground font-semibold">{profile.name}</span>. {profile.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-card"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm border border-border bg-card hover:bg-muted text-foreground transition-colors shadow-subtle"
            >
              <span>Discuss Your Project</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">1,200+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Live Vehicles Tracked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">3,500+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Pilgrims Booked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">99.95%</div>
              <div className="text-xs text-muted-foreground mt-0.5">Production Uptime</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">&lt; 30s</div>
              <div className="text-xs text-muted-foreground mt-0.5">Dispatch &amp; Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
