/**
 * Selected work section - Three featured projects
 * Showcases concrete examples of work
 */
import ProjectCard from "./ProjectCard";

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
    <section className="py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-light mb-16 text-black tracking-tight">Selected work</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

