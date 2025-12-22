/**
 * ProjectCard component - Reusable project display
 * Each project has a title and description
 * Constrained width for comfortable reading
 */
interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article className="mb-16 md:mb-20">
      <h3 className="text-2xl md:text-3xl font-light mb-5 text-black tracking-tight max-w-2xl">{title}</h3>
      <p className="text-lg md:text-xl leading-[1.75] text-black max-w-2xl">{description}</p>
    </article>
  );
}

