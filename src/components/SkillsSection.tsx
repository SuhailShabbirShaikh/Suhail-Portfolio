import { portfolioConfig } from "@/data/portfolioData";
import { Layers, Database, Cloud, Cpu, Code, Sparkles } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioConfig;

  const categories = [
    { title: "Frontend Architecture", items: skills.frontend, icon: Code, accent: "from-blue-600 to-cyan-500" },
    { title: "Backend & Systems", items: skills.backend, icon: Layers, accent: "from-indigo-600 to-purple-500" },
    { title: "Databases & Spatial Storage", items: skills.databases, icon: Database, accent: "from-emerald-600 to-teal-500" },
    { title: "Cloud Infrastructure & DevOps", items: skills.cloudDevOps, icon: Cloud, accent: "from-amber-600 to-orange-500" },
    { title: "Specialized Integrations", items: skills.specialized, icon: Cpu, accent: "from-rose-600 to-pink-500" },
  ];

  return (
    <section id="skills" className="py-24 md:py-36 border-b border-border/50 relative aura-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            Modern, resilient engineering stack.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Every layer of the stack is carefully selected for runtime performance, developer ergonomics, and rock-solid production availability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-3xl border border-border/80 glass-surface p-7 card-hover-flow shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.accent} flex items-center justify-center text-white shadow-subtle`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-foreground text-base tracking-tight">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-muted/80 text-foreground border border-border/80 hover:scale-105 hover:border-foreground/30 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
