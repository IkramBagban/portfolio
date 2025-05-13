import {
  Github,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

export const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/ikramBagban",
    icon: Github,
    username: "ikramBagban",
    highlighted: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Ikram_Bagban",
    icon: Twitter,
    username: "@Ikram_Bagban",
    highlighted: true,
  },
  {
    name: "Email",
    href: "mailto:bagbanikram@gmail.com",
    icon: Mail,
    username: "bagbanikram@gmail.com",
    highlighted: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ikram-bagban",
    icon: Linkedin,
    username: "ikram-bagban",
    highlighted: false,
  },
];
