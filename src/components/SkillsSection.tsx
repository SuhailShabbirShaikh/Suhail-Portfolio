import { portfolioConfig } from "@/data/portfolioData";
import { Layers, Database, Cloud, Cpu, Code } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioConfig;

  const categories = [
    { title: "Frontend Architecture", items: skills.frontend, icon: Code },
    { title: "Backend & Systems", items: skills.backend, icon: Layers },
    { title: "Databases & Storage", items: skills.databases, icon: Database },
    { title: "Cloud & DevOps", items: skills.cloudDevOps, icon: Cloud },
    { title: "Specialized Integrations", items: skills.specialized, icon: Cpu },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Battle-tested technical stack.
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Carefully curated technologies chosen for speed to market, developer ergonomics, and rock-solid scalability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-subtle hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center text-foreground">
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-foreground text-base">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/70 text-foreground border border-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
