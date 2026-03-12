import { ReactNode } from "react";

export interface SocialLink {
  icon: ReactNode;
  name: string;
  url: string;
  color: string;
}

export interface Role {
  text: string;
  color: string;
}
