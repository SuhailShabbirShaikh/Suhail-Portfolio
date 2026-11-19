"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Workflow,
  MapPin,
  Compass,
  ShieldAlert,
  BarChart3,
  Search,
  FileCheck,
  Calendar,
  MessageSquare,
  ExternalLink,
  Github,
  Lock
} from "lucide-react";
import { CaseStudy, portfolioConfig } from "@/data/portfolioData";

interface CaseStudyDetailProps {
  project: CaseStudy;
}

const iconMap: Record<string, any> = {
  MapPin,
  Compass,
  ShieldAlert,
  BarChart3,
  Search,
  FileCheck,
  Calendar,
  MessageSquare,
};

export function CaseStudyDetail({ project }: CaseStudyDetailProps) {
  // Find other project for quick navigation
  const otherProject = portfolioConfig.caseStudies.find((p) => p.slug !== project.slug);

  return (
    <article className="pt-28 pb-20 md:pt-36 md:pb-32 aura-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Title & Meta */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.mockupTheme.badgeColor}`}>
              {project.client}
            </span>
            <span className="text-xs text-muted-foreground">• Timeline: {project.timeline}</span>
            <span className="text-xs text-muted-foreground">• Role: {project.role}</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
            {project.subtitle}
          </p>

          {/* Action links: Live Demo, GitHub, WhatsApp project talk */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-opacity shadow-subtle"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-opacity shadow-subtle"
              >
                <span>Request Live Demo Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-border bg-card hover:bg-muted text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium border border-border/80 bg-muted/40 text-muted-foreground">
                <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Proprietary Client Architecture</span>
              </span>
            )}

            <a
              href={`https://wa.me/4915215484759?text=Hi%20Suhail,%20I'm%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(project.title)}%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss this Build on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Key Metrics Row */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-5 shadow-subtle"
              >
                <div className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-1.5 mb-1">
                  {metric.value}
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-xs font-semibold text-foreground">{metric.label}</div>
                {metric.change && (
                  <div className="text-[11px] text-muted-foreground mt-0.5">{metric.change}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Problem vs Solution 2-Column */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-subtle">
            <div className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Business Problem
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Operational Bottlenecks</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-subtle">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              The Engineered Solution
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Modern High-Scale Platform</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.solutionOverview}
            </p>
          </div>
        </section>

        {/* Technical Architecture Highlights */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
              System Design
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Technical Architecture Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.architectureHighlights.map((arch, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{arch.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {arch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
              Functionality
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Core Platform Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.coreFeatures.map((feat, idx) => {
              const Icon = iconMap[feat.iconName] || Workflow;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 shadow-subtle flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base mb-1">{feat.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack Breakdown */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-2">
              Stack Composition
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Technologies &amp; Frameworks Deployed
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-subtle">
            {project.techStack.map((stackGroup, idx) => (
              <div key={idx} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-semibold text-sm text-foreground sm:w-1/3">
                  {stackGroup.category}
                </span>
                <div className="flex flex-wrap gap-2 sm:w-2/3">
                  {stackGroup.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Engineering Challenges Solved */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-2">
              Engineering Deep-Dive
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Complex Challenges Solved
            </h2>
          </div>

          <div className="space-y-4">
            {project.keyChallengesSolved.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-subtle space-y-3"
              >
                <div className="text-sm font-bold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {item.challenge}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                  <strong className="text-foreground">Solution: </strong>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Measurable Results & Impact */}
        <section className="mb-16">
          <div className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-10 shadow-subtle">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Measurable Client Outcomes
            </h3>
            <ul className="space-y-4">
              {project.resultsAndImpact.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Project Footer Nav & Consultation CTA */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          {otherProject ? (
            <Link
              href={`/projects/${otherProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span>Next Case Study: {otherProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-card"
          >
            <span>Discuss a Similar Project with Suhail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
