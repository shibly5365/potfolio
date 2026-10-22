import type { ExperienceItem } from "@/types/portfolio";

/** Add further verified roles to this list — newest first. */
export const experience: ExperienceItem[] = [
  {
    id: "bridgeon",
    role: "MERN Stack Developer Intern",
    company: "Bridgeon Solutions | Knifra Infotech",
    type: "Internship",
    location: "Calicut, Kerala, India",
    start: "2025-01",
    end: null,
    summary:
      "Hands-on internship building two full-stack products: a Hospital Management System (individual) and a Restaurant CRM / management platform (team of 3).",
    highlights: [
      "Built appointment booking, video consultations, live chat and payment flows using Socket.io, WebRTC and Razorpay.",
      "Implemented JWT authentication with role-based access control across 5+ user roles.",
      "Developed reusable React components and modular Express.js backends with MongoDB.",
      "Integrated and tested REST APIs with Postman; debugged issues across frontend and backend.",
      "Followed Agile practices with Git/GitHub branching, pull requests, code reviews and ClickUp.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC", "Razorpay", "JWT"],
  },
];
