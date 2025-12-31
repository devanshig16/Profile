"use client";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

/**
 * Selected work section - Featured projects
 * Showcases concrete examples of work
 * Uses SectionHeading with decorative line
 */
export default function SelectedWork() {
  const projects = [
    {
      title: "PSU Marketplace Website",
      description:
        "Built a full-stack campus marketplace using React.js, Node.js, Firebase, and Stripe for secure payments. Designed relational schemas to support listings, users, and transactions. Stress-tested the platform with 10,000+ simulated transactions to validate scalability and reliability.",
      link: "https://psu-marketplace.vercel.app/home",
    },
    {
      title: "Audit Dashboard — The Daily Collegian",
      description:
        "Developed a centralized dashboard to analyze article structure, publishing frequency, and coverage trends. Automated reporting workflows, reducing manual analysis effort for editorial staff. Surfaced data-driven insights into newsroom production bottlenecks and content strategy.",
    },
    {
      title: "Bureaucracy Buddy",
      description:
        "Designed an AI-powered assistant to simplify complex paperwork and form completion through guided, conversational workflows. Translated bureaucratic processes into clear, step-by-step user experiences to reduce confusion and user friction. Focused on accessibility, usability, and human-centered design to make administrative tasks more approachable.",
      link: "https://bureaucracy-buddy-phi.vercel.app/",
    },
    {
      title: "HireNet",
      description:
        "Built a decentralized employee hiring platform using blockchain technology. Leveraged smart contracts to create transparent, trustless job postings and candidate applications. Enabled direct employer-talent connections without intermediaries, reducing costs and increasing efficiency in the recruitment process.",
      link: "https://web3-trial.vercel.app/",
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
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

