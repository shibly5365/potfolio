import { motion } from "framer-motion";
import { BookOpenCheck, Boxes, Lightbulb, Rocket, Users, Wrench } from "lucide-react";

import { aboutPoints, metrics } from "@/data/content";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const icons = [BookOpenCheck, Rocket, Lightbulb, Users, Wrench, Boxes];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="about-title"
              index="01"
              eyebrow="About"
              title="Complete web applications, end to end."
            />
            <Reveal className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm a Full Stack Developer focused on the MERN stack. I enjoy owning a feature from the first
                wireframe to the database query behind it — responsive React interfaces, REST APIs in Node.js and
                Express, schema design in MongoDB or PostgreSQL, and the authentication and real-time layers that
                connect them.
              </p>
              <p>
                During my internship I built a hospital management system on my own and worked in a three-person Agile
                team on a restaurant SaaS platform — shipping payments, video consultations, live chat and role-based
                access control along the way.
              </p>
              <p>
                I care about code that the next developer can read and extend, and I'm steadily deepening my
                understanding of scalable architecture through hands-on projects and daily DSA practice.
              </p>
            </Reveal>
          </div>

          <motion.ul
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-3 self-start sm:grid-cols-2"
          >
            {aboutPoints.map((point, i) => {
              const Icon = icons[i % icons.length] ?? Lightbulb;
              return (
                <motion.li
                  key={point.title}
                  variants={fadeUp}
                  className="group rounded-xl border border-border bg-card p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-highlight/40"
                >
                  <Icon aria-hidden className="size-5 text-highlight transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-display text-base font-medium text-foreground">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        <motion.dl
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-2 divide-border overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-4 lg:divide-x"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className={`flex flex-col gap-2 p-6 sm:p-8 ${i < 2 ? "border-b border-border lg:border-b-0" : ""} ${i % 2 === 0 ? "border-r border-border lg:border-r-0" : ""}`}
            >
              <dt className="order-2 text-sm text-muted-foreground">
                {m.label}
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70">
                  {m.source}
                </span>
              </dt>
              <dd className="order-1 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                <Counter value={m.value} suffix={m.suffix ?? ""} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
