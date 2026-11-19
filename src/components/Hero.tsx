"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, Linkedin, Github, Terminal, Shield, Zap, Compass, CheckCircle2 } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export function Hero() {
  const { profile } = portfolioConfig;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 aura-bg overflow-hidden border-b border-border/50">
      {/* Dynamic Floating Background Aura Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-emerald-500/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-float-medium" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface border border-border/80 text-xs font-semibold text-foreground mb-8 shadow-glass animate-float-fast hover:scale-105 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wide">Senior Full-Stack Consultant</span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">{profile.location}</span>
          </div>

          {/* Fluid Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            Architecting platforms that{" "}
            <span className="gradient-heading inline-block">
              scale effortlessly.
            </span>
          </h1>

          {/* Narrative Subtitle */}
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 font-normal">
            Hi, I&apos;m <span className="text-foreground font-semibold">{profile.name}</span>. I design and build mission-critical digital products — from high-throughput real-time telemetry systems to high-volume pilgrimage booking platforms.
          </p>

          {/* Floating Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl"
            >
              <span>Explore In-Depth Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 active:scale-95 transition-all shadow-glow-emerald"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm glass-surface hover:bg-muted text-foreground transition-all hover:scale-105 active:scale-95"
            >
              <span>Book Intro Call</span>
            </Link>
          </div>

          {/* Floating Social Connectors */}
          <div className="flex items-center gap-5 text-xs text-muted-foreground mb-16">
            <span>Direct Profiles:</span>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-border">•</span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:underline transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-border">•</span>
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-1.5 font-semibold hover:underline text-foreground transition-colors"
            >
              <span>{profile.links.email}</span>
            </a>
          </div>

          {/* Floating Live Metrics Dock */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl glass-surface shadow-2xl border border-border/80">
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">1,200+</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">Vehicles Tracked Live</div>
            </div>
            <div className="p-3 text-center border-l border-border/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">18.4%</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">Fleet Fuel Reduction</div>
            </div>
            <div className="p-3 text-center border-l border-border/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">3,500+</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">Pilgrims Booked</div>
            </div>
            <div className="p-3 text-center border-l border-border/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">99.95%</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">Production SLA</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
