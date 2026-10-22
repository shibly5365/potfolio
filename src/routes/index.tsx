import { createFileRoute } from "@tanstack/react-router";

import { site } from "@/config/site";
import { About } from "@/components/sections/about";
import { Approach } from "@/components/sections/approach";
import { Availability } from "@/components/sections/availability";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Learning } from "@/components/sections/learning";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

const title = "Nuhmanu Ibnu Shibly | Full Stack Developer";
const description =
  "Full Stack Developer specializing in the MERN stack — React, Next.js, Node.js and TypeScript. Explore real projects and get in touch about roles in Dubai and Abu Dhabi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: "Full Stack Developer",
          email: `mailto:${site.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Calicut", addressRegion: "Kerala", addressCountry: "IN" },
          knowsAbout: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs", "RBAC"],
          sameAs: site.socials.filter((s) => s.key !== "email").map((s) => s.href),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Approach />
      <Learning />
      <Availability />
      <Contact />
    </>
  );
}
