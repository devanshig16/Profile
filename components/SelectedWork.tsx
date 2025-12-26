"use client";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

/**
 * Selected work section - Three featured projects
 * Showcases concrete examples of work
 * Uses SectionHeading with decorative line
 */
export default function SelectedWork() {
  const projects = [
    {
      title: "PSU Marketplace Website",
      description:
        "Built a full-stack campus marketplace using React.js, Node.js, Firebase, and Stripe for secure payments. Designed relational schemas to support listings, users, and transactions. Stress-tested the platform with 10,000+ simulated transactions to validate scalability and reliability.",
    },
    {
      title: "Audit Dashboard — The Daily Collegian",
      description:
        "Developed a centralized dashboard to analyze article structure, publishing frequency, and coverage trends. Automated reporting workflows, reducing manual analysis effort for editorial staff. Surfaced data-driven insights into newsroom production bottlenecks and content strategy.",
    },
    {
      title: "Responsible Machine Learning Research",
      description:
        "Built a Python-based fairness evaluation pipeline integrating bias detection and mitigation techniques for responsible ML deployment. Optimized interpretable classifiers, improving fairness and recall by 18% while maintaining model transparency. Integrated explainability modules and automated error analysis to support data-driven model refinement.",
    },
    {
      title: "Bureaucracy Buddy",
      description:
        "Designed an AI-powered assistant to simplify complex paperwork and form completion through guided, conversational workflows. Translated bureaucratic processes into clear, step-by-step user experiences to reduce confusion and user friction. Focused on accessibility, usability, and human-centered design to make administrative tasks more approachable.",
    },
  ];

  return (
    <Section bgColor="light-terracotta" nextBgColor="warm-cream" className="py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <SectionHeading delay={0.1}>Selected work</SectionHeading>
        </div>
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

