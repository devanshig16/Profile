"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

/**
 * Experience section - Detailed work history
 * Lists all professional experiences with descriptions
 */
export default function Experience() {
  const experiences = [
    {
      title: "President",
      company: "HackPSU",
      location: "University Park, PA",
      period: "May 2025 – Present",
      description: "Lead Penn State's largest student-run hackathon, setting strategic direction and overseeing end-to-end operations for 800+ participants per semester. Manage and mentor a 10+ person executive board across education, sponsorship, logistics, and outreach teams. Drive partnerships with campus organizations and industry sponsors to expand technical access, programming quality, and event scale.",
    },
    {
      title: "Director of Education",
      company: "HackPSU",
      location: "University Park, PA",
      period: "May 2025 – Present",
      description: "Lead the design and execution of HackPSU's technical education initiatives, including workshops and pre-event programming. Coordinate curriculum development, instructor onboarding, and session delivery to ensure high-quality, accessible learning experiences. Align educational content with hackathon goals to improve participant preparedness and engagement.",
    },
    {
      title: "Business Insights Staff",
      company: "The Daily Collegian",
      location: "University Park, PA",
      period: "August 2025 – Present",
      description: "Develop a full-stack analytics dashboard to track and visualize social media performance across multiple platforms. Build machine learning pipelines using named entity recognition, clustering, and contextual analysis to extract trends from long-term newsroom data. Collaborate with editorial and business teams to translate insights into data-informed audience and growth strategies.",
    },
    {
      title: "Lead Web Designer",
      company: "The Dangling Modifier",
      location: "University Park, PA",
      period: "January 2025 – Present",
      description: "Lead the redesign and modernization of the publication's website using HTML, CSS, and JavaScript. Improved average session duration by 25% and increased accessibility from 70% to 95% through responsive, inclusive design practices. Work closely with editorial contributors to ensure visual consistency, usability, and alignment with branding goals.",
    },
    {
      title: "AI Consultant",
      company: "The Bata Corporation",
      location: "Delhi, India",
      period: "May 2025 – July 2025",
      description: "Designed enterprise AI use cases supported by proof-of-concept documentation, vendor evaluations, and cost–benefit analyses. Assessed integration of AI tools within existing business workflows to identify efficiency and knowledge-sharing improvements. Secured $80,000 in executive-approved funding for pilot AI deployments supporting internal operations.",
    },
    {
      title: "Research Assistant",
      company: "Center for Socially Responsible AI",
      location: "University Park, PA",
      period: "August 2024 – Present",
      description: "Developed a Python-based fairness evaluation pipeline integrating bias detection, mitigation, and explainability methods. Optimized interpretable machine learning models, improving fairness and recall by 18% while preserving transparency. Conducted automated error analysis to support responsible and accountable ML deployment.",
    },
    {
      title: "Course Designer",
      company: "Penn State College of Engineering",
      location: "University Park, PA",
      period: "March 2025 – May 2025",
      description: "Collaborated with faculty to design and refine instructional materials for an undergraduate Theory of Computation course. Created structured problem sets, lecture slides, and assessments covering automata, formal languages, Turing machines, and decidability. Focused on clarity, rigor, and student comprehension in complex theoretical topics.",
    },
    {
      title: "English Writing Tutor",
      company: "The Writing Center @ Penn State",
      location: "University Park, PA",
      period: "May 2024 – Present",
      description: "Provide individualized tutoring and workshop facilitation to support students across disciplines in academic and professional writing. Guide students through drafting, revision, and argument development to improve clarity and structure. Adapt feedback strategies to diverse writing goals, learning styles, and proficiency levels.",
    },
  ];

  return (
    <Section bgColor="warm-cream" nextBgColor="light-terracotta" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-ocean/20 to-mint/20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading delay={0.1}>Experience</SectionHeading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="border-l-4 border-l-sage pl-6 md:pl-8 bg-white/50 dark:bg-dark-surface/50 rounded-r-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-near-black dark:text-dark-text">
                  {exp.title}
                </h3>
                <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-300 mb-1">
                  {exp.company}
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-500 mb-2">
                  {exp.location}
                </p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic">
                  {exp.period}
                </p>
              </div>
              <p className="text-base md:text-lg leading-[1.7] text-near-black dark:text-dark-text">
                {exp.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

