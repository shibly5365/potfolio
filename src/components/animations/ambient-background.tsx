const particles = [
  { left: "12%", top: "18%", size: 3, delay: "0s" },
  { left: "78%", top: "12%", size: 2, delay: "2s" },
  { left: "64%", top: "42%", size: 3, delay: "4s" },
  { left: "22%", top: "64%", size: 2, delay: "1s" },
  { left: "88%", top: "72%", size: 2, delay: "3s" },
  { left: "42%", top: "86%", size: 3, delay: "5s" },
];

/** Low-contrast, CSS-only animated backdrop. Purely decorative. */
export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
      <div className="animate-drift-a absolute -left-[15%] -top-[20%] h-[70vh] w-[70vh] rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-drift-b absolute -right-[10%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-violet/15 blur-[130px]" />
      <div className="animate-drift-a absolute bottom-[-25%] left-[30%] h-[55vh] w-[55vh] rounded-full bg-highlight/10 blur-[140px] [animation-delay:-8s]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-float-particle absolute rounded-full bg-highlight/60"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
