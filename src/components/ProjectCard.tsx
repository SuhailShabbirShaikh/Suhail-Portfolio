"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Navigation, Calendar, Users, Activity, CheckCircle2, Shield, Cpu, ExternalLink } from "lucide-react";
import { CaseStudy } from "@/data/portfolioData";

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFleet = project.slug === "fleet-management";
  const [activeTab, setActiveTab] = useState<number>(0);

  const fleetTabs = [
    { name: "Live GPS Telemetry", tag: "3,000 req/s" },
    { name: "Route & Geofencing", tag: "200ms trigger" },
    { name: "Engine Diagnostics", tag: "OBD-II Realtime" },
  ];

  const ummatTabs = [
    { name: "Dynamic Room Booking", tag: "Quad/Triple/Double" },
    { name: "Encrypted Document Vault", tag: "AES-256 Cloud" },
    { name: "Ministry Manifest Generator", tag: "Automated PDF" },
  ];

  const tabs = isFleet ? fleetTabs : ummatTabs;

  return (
    <div className="group rounded-3xl border border-border/80 glass-surface overflow-hidden card-hover-flow shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Side: Case Study Narrative */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${project.mockupTheme.badgeColor}`}>
                {project.client}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">• {project.timeline}</span>
              <span className="text-xs font-semibold text-muted-foreground">• {project.role}</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                <span>{project.title}</span>
              </Link>
            </h3>

            {/* Subtitle */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              {project.summary}
            </p>

            {/* High-impact Metrics Row */}
            <div className="grid grid-cols-2 gap-4 py-5 my-2 border-y border-border/60">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground flex items-center gap-2">
                    {m.value}
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-xs font-semibold text-foreground/80">{m.label}</div>
                  {m.change && <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">{m.change}</div>}
                </div>
              ))}
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2 my-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-muted/80 text-foreground border border-border/70 hover:border-blue-500/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 font-semibold text-sm text-foreground bg-foreground/5 hover:bg-foreground hover:text-background px-5 py-2.5 rounded-full transition-all group/btn"
            >
              <span>Read Full Architecture &amp; Solution</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Link>

            <a
              href={`https://wa.me/4915215484759?text=Hi%20Suhail,%20I'm%20interested%20in%20a%20platform%20like%20${encodeURIComponent(project.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              Ask about this system on WhatsApp &rarr;
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Living Dashboard Screen */}
        <div className="lg:col-span-5 bg-muted/30 p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/80 relative overflow-hidden">
          
          {/* Subtle Ambient Radial behind preview */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />

          {/* Screen Frame */}
          <div className="w-full rounded-2xl border border-border/90 bg-card/95 backdrop-blur-md p-5 shadow-2xl relative z-10 space-y-4">
            
            {/* Top Bar with window dots & domain badge */}
            <div className="flex items-center justify-between pb-3 border-b border-border text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/50">
                {isFleet ? "telemetry.fleetsync.io" : "portal.ummat-hajj.com"}
              </span>
            </div>

            {/* Interactive Module Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 text-[11px] font-semibold">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-1 px-2 rounded-lg transition-all text-center ${
                    activeTab === idx
                      ? "bg-card text-foreground shadow-sm font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Screen Content State */}
            {isFleet ? (
              <div className="space-y-3">
                {activeTab === 0 && (
                  <div className="h-40 rounded-xl bg-slate-950 text-white p-3.5 relative overflow-hidden flex flex-col justify-between border border-slate-800">
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="flex items-center justify-between text-[11px] relative z-10">
                      <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/30 flex items-center gap-1.5 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        LIVE GPS RADAR
                      </span>
                      <span className="font-mono text-zinc-400 text-[10px]">1,248 Units Connected</span>
                    </div>

                    <div className="relative z-10 bg-slate-900/90 rounded-lg p-2.5 border border-slate-700/80 text-xs shadow-lg">
                      <div className="flex justify-between items-center text-slate-100 font-semibold">
                        <span>Commercial Unit #FL-802</span>
                        <span className="text-emerald-400 font-mono">68.4 MPH</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                        <span>I-95 Northbound • GPS: 38.8951° N</span>
                        <span className="text-blue-300">Ping 18ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="h-40 rounded-xl bg-slate-950 text-white p-3.5 flex flex-col justify-between border border-slate-800">
                    <div className="text-[11px] font-semibold text-blue-400 flex items-center justify-between">
                      <span>Automated Geofence Engine</span>
                      <span className="font-mono text-emerald-400">PostGIS Indexed</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                        <span className="text-slate-300">Port Terminal B Entry</span>
                        <span className="text-emerald-400 font-mono font-bold">+0.12s trigger</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                        <span className="text-slate-300">Automated Dispatcher Alert</span>
                        <span className="text-blue-400 font-mono">Dispatched</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="h-40 rounded-xl bg-slate-950 text-white p-3.5 flex flex-col justify-between border border-slate-800">
                    <div className="text-[11px] font-semibold text-amber-400 flex items-center justify-between">
                      <span>OBD-II Telemetry Diagnostics</span>
                      <span className="text-emerald-400 text-[10px] font-mono">Zero DTC Faults</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Coolant Temp</span>
                        <span className="font-mono text-slate-100 font-bold">195° F (Normal)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Battery Voltage</span>
                        <span className="font-mono text-slate-100 font-bold">14.2 V (Healthy)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub metric tags */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl border border-border bg-muted/40">
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase">Fuel Idling Cut</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">-18.4% Monthly</div>
                  </div>
                  <div className="p-2.5 rounded-xl border border-border bg-muted/40">
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase">Dispatch Response</div>
                    <div className="font-bold text-foreground mt-0.5">&lt; 30 Seconds</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {activeTab === 0 && (
                  <div className="h-40 rounded-xl bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 text-white p-3.5 flex flex-col justify-between border border-blue-900/60 shadow-lg">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded border border-blue-400/30 font-semibold">
                        Ramadan Executive Tier
                      </span>
                      <span className="text-amber-300 font-bold text-xs">★ 4.98 (380+ reviews)</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Clock Tower Royal Front (50m to Kaaba)</div>
                      <div className="text-[10px] text-blue-200 mt-0.5">Flexible Room Sharing: Double / Triple / Quad</div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-blue-800/80 text-xs">
                      <span className="text-blue-300 text-[11px]">Instant Stripe Multi-Currency</span>
                      <span className="font-extrabold text-white font-mono text-sm">$3,850 / pax</span>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="h-40 rounded-xl bg-slate-950 text-white p-3.5 flex flex-col justify-between border border-slate-800">
                    <div className="text-[11px] font-semibold text-emerald-400 flex items-center justify-between">
                      <span>AES-256 Pilgrim Document Vault</span>
                      <span className="text-[10px] font-mono text-slate-400">AWS S3 Encrypted</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-200">Passport Bio Page Scan</span>
                        <span className="text-emerald-400 font-semibold text-[10px]">✓ OCR Verified</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-200">Visa Application Batch</span>
                        <span className="text-blue-400 font-semibold text-[10px]">Ministry Approved</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="h-40 rounded-xl bg-slate-950 text-white p-3.5 flex flex-col justify-between border border-slate-800">
                    <div className="text-[11px] font-semibold text-indigo-400 flex items-center justify-between">
                      <span>Ministry Travel Manifest</span>
                      <span className="text-emerald-400 text-[10px] font-mono">100% Compliant</span>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <div className="flex justify-between text-slate-300 font-semibold">
                        <span>Flight Group SV-812 Manifest</span>
                        <span className="text-emerald-400 font-mono">240 Pilgrims</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Rooming allocations &amp; bus seat assignments mapped.</div>
                    </div>
                  </div>
                )}

                {/* Sub metric tags */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl border border-border bg-muted/40">
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase">Total Pilgrims Booked</div>
                    <div className="font-bold text-foreground mt-0.5">3,500+ Verified</div>
                  </div>
                  <div className="p-2.5 rounded-xl border border-border bg-muted/40">
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase">Conversion Rate</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">94.2% Checkout</div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-1 text-center">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Inspect System Architecture &amp; Schemas</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
