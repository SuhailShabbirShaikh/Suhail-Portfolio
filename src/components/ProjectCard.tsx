"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Navigation, Calendar, Users, Activity } from "lucide-react";
import { CaseStudy } from "@/data/portfolioData";

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFleet = project.slug === "fleet-management";

  return (
    <div className="group rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Case Study Narrative */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.mockupTheme.badgeColor}`}>
                {project.client}
              </span>
              <span className="text-xs text-muted-foreground">• {project.timeline}</span>
              <span className="text-xs text-muted-foreground">• {project.role}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            {/* Subtitle */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* High-impact metrics */}
            <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-border/80">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-1.5">
                    {m.value}
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{m.label}</div>
                  {m.change && <div className="text-[11px] text-emerald-600 dark:text-emerald-400">{m.change}</div>}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-foreground/80 border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 font-medium text-sm text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Explore In-Depth Case Study &amp; Architecture</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive UI Mockup Representation */}
        <div className="lg:col-span-5 bg-muted/40 p-6 sm:p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-border/70 relative overflow-hidden">
          {/* Subtle gradient behind preview */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />

          {/* Mockup Frame */}
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-subtle relative z-10 space-y-4">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-border text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                {isFleet ? "telemetry.fleetsync.io" : "ummat-pilgrim.app"}
              </span>
            </div>

            {isFleet ? (
              /* Fleet Management Visual Simulation */
              <div className="space-y-3">
                <div className="h-32 rounded-xl bg-slate-900 text-white p-3 relative overflow-hidden flex flex-col justify-between">
                  {/* Fake map grid */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="flex items-center justify-between text-[11px] relative z-10">
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live GPS Sync
                    </span>
                    <span className="font-mono text-zinc-400">1,248 Units</span>
                  </div>
                  <div className="relative z-10 bg-slate-800/90 rounded-lg p-2 border border-slate-700 text-xs">
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="font-semibold">Truck #FL-402</span>
                      <span className="text-emerald-400 font-mono">68 mph</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Route: I-95 Northbound • On Schedule</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg border border-border bg-muted/50">
                    <div className="text-[10px] text-muted-foreground uppercase">Geofence Status</div>
                    <div className="font-semibold text-foreground mt-0.5">Zone A Cleared</div>
                  </div>
                  <div className="p-2.5 rounded-lg border border-border bg-muted/50">
                    <div className="text-[10px] text-muted-foreground uppercase">Fuel Efficiency</div>
                    <div className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">+18.4% Saved</div>
                  </div>
                </div>
              </div>
            ) : (
              /* Ummat Hajj Umrah Visual Simulation */
              <div className="space-y-3">
                <div className="rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="bg-blue-400/20 text-blue-200 px-2 py-0.5 rounded border border-blue-400/30">
                      Verified Ramadan 2026
                    </span>
                    <span className="text-amber-400 text-xs">★★★★★ 4.9</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">VIP 14-Day Umrah Package</div>
                    <div className="text-[10px] text-blue-200">Clock Tower Hotel (50m from Haram)</div>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-blue-800 text-xs">
                    <span className="text-[11px] text-blue-300">Quad / Double Sharing</span>
                    <span className="font-bold text-white">$2,450 / pax</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg border border-border bg-muted/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">Visa Pre-Approval</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Auto-Verified
                    </span>
                  </div>
                  <div className="p-2 rounded-lg border border-border bg-muted/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">Passenger Manifest</span>
                    <span className="font-mono text-[11px] text-foreground">3,500+ Issued</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 text-center">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Inspect Full Technical Architecture &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
