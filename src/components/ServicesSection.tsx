import { portfolioConfig } from "@/data/portfolioData";
import { Code2, Server, Rocket, CreditCard, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const icons = [Code2, Server, Rocket, CreditCard];

  return (
    <section id="services" className="py-24 md:py-36 border-b border-border/50 relative aura-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Consulting Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            Engineering tailored for speed, resilience, and business ROI.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            I work directly with technical founders, product leaders, and enterprise teams to design and ship production-grade software with zero bloat.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-border/80 glass-surface p-8 sm:p-10 card-hover-flow shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white mb-8 shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/60">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    Deliverables
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-foreground">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Call to Action Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-surface border border-border/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-foreground">Need a custom scope or technical consultation?</h4>
            <p className="text-xs text-muted-foreground mt-1">Available for project sprints, architectural reviews, or full-cycle development.</p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-semibold text-xs hover:scale-105 active:scale-95 transition-all shadow-subtle shrink-0"
          >
            <span>Request Project Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
