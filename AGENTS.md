<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All portfolio content (personal info, links, resume, availability) lives in `src/config/site.ts`; skills, experience, projects and section copy live in `src/data/*`. Components only render data — so content can be edited without touching UI.
- Projects are a typed list in `src/data/projects.ts`; cards, `/projects/$slug` case-study pages and `sitemap.xml` are generated from it — add projects there, never hardcode new cards.
- Home is a single scrolling page with section ids matching `navSections`; nav uses `<Link to="/" hash=...>` so links work from any route.
- Shared Framer Motion variants live in `src/lib/motion.ts`; above-the-fold hero uses CSS `animate-rise` so it is visible before hydration and without JS.
- Contact form delivers via EmailJS REST when `VITE_EMAILJS_*` env vars are set, else falls back to a prefilled mailto — never fake a "sent" state.
- Content must stay verifiable: no invented metrics, employers, links or skill percentages; skills are tagged `hands-on` or `learning`.
