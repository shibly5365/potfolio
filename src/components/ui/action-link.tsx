import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "group/action relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-elegant hover:bg-primary/90 hover:shadow-[0_20px_50px_-20px_var(--primary)]",
        secondary:
          "border border-border-strong bg-surface/60 text-foreground hover:border-highlight/60 hover:bg-surface",
        ghost: "text-foreground hover:text-highlight",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Icon = "arrow" | "external" | "download" | "none";

export function ActionIcon({ icon }: { icon: Icon }) {
  if (icon === "none") return null;
  if (icon === "download")
    return <Download aria-hidden className="size-4 transition-transform duration-300 group-hover/action:translate-y-0.5" />;
  if (icon === "external")
    return (
      <ArrowUpRight
        aria-hidden
        className="size-4 transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
      />
    );
  return <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover/action:translate-x-1" />;
}

interface ActionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof actionVariants> {
  icon?: Icon;
  children: ReactNode;
  external?: boolean;
}

/** Anchor styled as a button with an animated trailing icon. */
export function ActionLink({ className, variant, size, icon = "arrow", external, children, ...props }: ActionLinkProps) {
  return (
    <a
      className={cn(actionVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      <ActionIcon icon={icon} />
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
