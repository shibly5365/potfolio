import { describe, expect, it } from "vitest";

import { buildMailto, contactSchema } from "@/lib/contact";
import { monthsBetween } from "@/lib/dates";

const valid = {
  name: "Recruiter",
  email: "hr@example.ae",
  subject: "Full Stack role",
  message: "We'd like to talk about a MERN position in Dubai.",
};

describe("contact form rules", () => {
  it("accepts a complete, valid message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a message of at least 20 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Too short" }).success).toBe(false);
  });

  it("rejects submissions that fill the hidden honeypot field", () => {
    expect(contactSchema.safeParse({ ...valid, company: "spam-bot" }).success).toBe(false);
  });

  it("encodes the subject in the email fallback link", () => {
    expect(buildMailto("me@example.com", valid)).toContain("subject=Full%20Stack%20role");
  });
});

describe("experience duration", () => {
  it("counts whole months from January 2025 to October 2026", () => {
    expect(monthsBetween("2025-01", null, new Date(2026, 9, 19))).toBe(21);
  });
});
