import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";
import { SocialLink, Role } from "../types/home";

export const socialLinks: SocialLink[] = [
  { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2" },
  { icon: <FaGithub />, name: "GitHub", url: "https://github.com", color: "#fff" },
  { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com", color: "#1DA1F2" },
  { icon: <FaTelegram />, name: "Telegram", url: "https://t.me", color: "#0088cc" },
  { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com", color: "#E1306C" },
];

export const roles: Role[] = [
  { text: "Full Stack Developer", color: "linear-gradient(90deg, #22d3ee, #34d399)" },
  { text: "Frontend Developer", color: "linear-gradient(90deg, #f472b6, #fb923c)" },
  { text: "Backend Developer", color: "linear-gradient(90deg, #a78bfa, #34d399)" },
];
