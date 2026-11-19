import { portfolioConfig } from "@/data/portfolioData";
import { Code2, Server, Rocket, CreditCard, Check } from "lucide-react";

export function ServicesSection() {
  const icons = [Code2, Server, Rocket, CreditCard];

  return (
    <section id="services" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            Services &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            End-to-end engineering tailored for client growth.
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Whether you are launching a greenfield product from scratch or scaling an existing system, I deliver clean, tested code on strict deadlines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-foreground/30 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-foreground mb-6">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Key Deliverables
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-foreground">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
