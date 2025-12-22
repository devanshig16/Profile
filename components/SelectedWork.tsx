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
      title: "Newsroom Analytics — The Daily Collegian",
      description:
        "Newsrooms produce years of content, but very little feedback about how it all fits together. I built a system that surfaces patterns in publishing behavior — structure, cadence, and coverage — so editors can make decisions with data instead of guesswork.",
    },
    {
      title: "Responsible Machine Learning",
      description:
        "At a socially responsible AI research lab, I worked on fairness and bias-mitigation pipelines for machine learning models. The goal wasn't just better metrics, but models people could understand and trust.",
    },
    {
      title: "AI in Business",
      description:
        "As an AI consultant, I evaluated and tested generative AI tools for internal workflows — balancing capability, cost, and whether people would actually use them. One of those pilots ended up securing funding for real deployment.",
    },
  ];

  return (
    <Section bgColor="light-terracotta" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="content-container">
          <SectionHeading delay={0.1}>Selected work</SectionHeading>
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
      </div>
    </Section>
  );
}

