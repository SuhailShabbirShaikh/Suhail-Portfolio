import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { portfolioConfig } from "@/data/portfolioData";
import { Sparkles, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects / Case Studies */}
      <section id="projects" className="py-20 md:py-28 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Client Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              In-depth Case Studies
            </h2>
            <p className="mt-3 text-muted-foreground text-base sm:text-lg">
              Explore how these production platforms were architected from problem statement through deployment, delivering measurable ROI.
            </p>
          </div>

          <div className="space-y-12">
            {portfolioConfig.caseStudies.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Delivery Process & Testimonials */}
      <ProcessSection />

      {/* Contact & Consultation Section */}
      <ContactSection />
    </div>
  );
}
