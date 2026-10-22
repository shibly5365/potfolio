import { motion } from "framer-motion";

import { githubUrl } from "@/config/site";
import { featuredProjects, otherProjects } from "@/data/projects";
import { CompactProjectCard, FeaturedProjectCard } from "@/components/projects/project-card";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { stagger } from "@/lib/motion";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="projects-title"
          index="04"
          eyebrow="Featured projects"
          title="Real products, real engineering decisions."
          description="Two full-stack platforms built during my internship. Open the engineering notes or the full case study to see the problem, architecture and trade-offs."
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 space-y-8"
        >
          {featuredProjects.map((p, i) => (
            <FeaturedProjectCard key={p.slug} project={p} index={i} reverse={i % 2 === 1} />
          ))}
        </motion.div>

        {otherProjects.length > 0 ? (
          <div className="mt-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-display text-2xl font-medium text-foreground">More projects</h3>
              <ActionLink href={githubUrl} external variant="ghost" size="sm" icon="external" className="px-0">
                All repositories on GitHub
              </ActionLink>
            </div>
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              {otherProjects.map((p) => (
                <CompactProjectCard key={p.slug} project={p} />
              ))}
            </motion.div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
