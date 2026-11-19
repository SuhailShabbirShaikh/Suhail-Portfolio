import Link from "next/link";
import { portfolioConfig } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-foreground text-base">
              {portfolioConfig.profile.name}
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {portfolioConfig.profile.title}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/projects/fleet-management" className="hover:text-foreground transition-colors">
              FleetSync Case Study
            </Link>
            <Link href="/projects/ummat-hajj-umrah" className="hover:text-foreground transition-colors">
              Ummat Pilgrimage Case Study
            </Link>
            <a
              href={`mailto:${portfolioConfig.profile.links.email}`}
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href={portfolioConfig.profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={portfolioConfig.profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="text-xs text-muted-foreground">
            &copy; {currentYear} {portfolioConfig.profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
