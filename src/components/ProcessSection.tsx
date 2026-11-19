import { portfolioConfig } from "@/data/portfolioData";
import { Quote } from "lucide-react";

export function ProcessSection() {
  const { workingProcess, testimonials } = portfolioConfig;

  return (
    <section id="process" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            Engagement Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            How I collaborate with clients.
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Transparent communication, sprint-based delivery, and total alignment with your engineering and business targets.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workingProcess.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-border bg-card p-6 shadow-subtle relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 block">
                  {step.step}
                </span>
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-subtle relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-blue-600/30 mb-4" />
              <p className="text-foreground text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-sm text-foreground">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
