const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMonth(iso: string): { y: number; m: number } {
  const [y, m] = iso.split("-").map(Number);
  return { y: y ?? 1970, m: (m ?? 1) - 1 };
}

/** Whole months from start to end (or today when end is null). */
export function monthsBetween(start: string, end: string | null, now: Date = new Date()): number {
  const s = parseMonth(start);
  const e = end ? parseMonth(end) : { y: now.getFullYear(), m: now.getMonth() };
  return Math.max(0, (e.y - s.y) * 12 + (e.m - s.m));
}

export function formatMonth(iso: string | null): string {
  if (!iso) return "Present";
  const { y, m } = parseMonth(iso);
  return `${MONTHS[m] ?? ""} ${y}`;
}
