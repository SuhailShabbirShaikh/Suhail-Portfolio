import { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioConfig } from "@/data/portfolioData";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";

const project = portfolioConfig.caseStudies.find((p) => p.slug === "fleet-management");

export const metadata: Metadata = {
  title: `${project?.title} — Case Study by ${portfolioConfig.profile.name}`,
  description: project?.summary,
};

export default function FleetManagementPage() {
  if (!project) return notFound();
  return <CaseStudyDetail project={project} />;
}
