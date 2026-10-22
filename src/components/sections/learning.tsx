import { motion } from "framer-motion";

import { githubUrl } from "@/config/site";
import { leetcodeRepoUrl, learningTracks } from "@/data/content";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icon";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Learning() {
  return (
    <section aria-labelledby="learning-title" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            id="learning-title"
            index="06"
            eyebrow="Problem solving"
            title="Continuous learning, in public."
            description="Fundamentals compound. Alongside project work I keep sharpening problem solving and the architecture skills that make software scale."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg border border-border-strong bg-surface text-foreground">
                <SocialIcon name="github" className="size-5" />
              </span>
              <div>
                <p className="font-display text-foreground">My work on GitHub</p>
                <p className="font-mono text-xs text-muted-foreground">github.com/shibly5365</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Browse project source code and my LeetCode solutions repository to see how I write and structure code.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ActionLink href={githubUrl} external variant="secondary" size="sm" icon="external">
                GitHub profile
              </ActionLink>
              <ActionLink href={leetcodeRepoUrl} external variant="ghost" size="sm" icon="external">
                DSA solutions
              </ActionLink>
            </div>
          </motion.div>
        </div>

        <motion.ul
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid content-start gap-3 sm:grid-cols-2"
        >
          {learningTracks.map((t, i) => (
            <motion.li
              key={t.title}
              variants={fadeUp}
              className={`group rounded-xl border border-border bg-card/60 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-violet/40 ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <p className="font-mono text-[11px] text-violet">{`// ${String(i + 1).padStart(2, "0")}`}</p>
              <h3 className="mt-2 font-display text-base font-medium text-foreground">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
