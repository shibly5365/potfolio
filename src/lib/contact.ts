import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be under 255 characters." }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Please add a short subject (at least 3 characters)." })
    .max(150, { message: "Subject must be under 150 characters." }),
  message: z
    .string()
    .trim()
    .min(20, { message: "Please write at least 20 characters so I have some context." })
    .max(2000, { message: "Message must be under 2000 characters." }),
  /** Honeypot — real visitors never see or fill this. */
  company: z.string().max(0).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;

export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function getEmailJsConfig(): EmailJsConfig | null {
  const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined;
  const templateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined;
  const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;
  if (!serviceId || !templateId || !publicKey) return null;
  return { serviceId, templateId, publicKey };
}

export type SubmitResult = { via: "emailjs" } | { via: "mailto"; href: string };

export function buildMailto(to: string, values: ContactValues): string {
  const body = `${values.message}\n\n— ${values.name} (${values.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Sends through EmailJS when VITE_EMAILJS_* variables are set; otherwise
 * returns a prefilled mailto link so the message still reaches the inbox.
 */
export async function submitContact(values: ContactValues, to: string): Promise<SubmitResult> {
  const config = getEmailJsConfig();
  if (!config) return { via: "mailto", href: buildMailto(to, values) };

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        from_name: values.name,
        from_email: values.email,
        reply_to: values.email,
        subject: values.subject,
        message: values.message,
      },
    }),
  });
  if (!res.ok) {
    throw new Error("The message could not be sent. Please try again or email me directly.");
  }
  return { via: "emailjs" };
}
