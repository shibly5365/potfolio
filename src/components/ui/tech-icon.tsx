import { Code2 } from "lucide-react";

import { cn } from "@/lib/utils";

/** Monochrome technology logo from simpleicons.org, with a neutral fallback. */
export function TechIcon({ slug, className }: { slug?: string | undefined; className?: string }) {
  if (!slug) return <Code2 aria-hidden className={cn("size-4 text-muted-foreground", className)} />;
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/CBD5E1`}
      alt=""
      aria-hidden
      width={16}
      height={16}
      loading="lazy"
      decoding="async"
      className={cn("size-4", className)}
    />
  );
}
