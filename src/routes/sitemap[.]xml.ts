import { createFileRoute } from "@tanstack/react-router";

import { projects } from "@/data/projects";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = ["/", ...projects.map((p) => `/projects/${p.slug}`)];
        const urls = paths
          .map((p) => `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
