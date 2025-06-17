import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tiago Sousa",
  initials: "TS",
  location: "Seixal, Portugal",
  about:
    "Student of Electrical and Computer Engineering (ECE).",
  summary: (
    <>
     I am driven by curiosity and a passion for puzzles in all their forms. Since I was a child, the greatest challenge that captivates me has been the computer. I admire the complexity of its circuits and the logical elegance that brings it to life. I love delving into the deepest levels to understand how every component integrates into the whole. This relentless pursuit of the “why” and the “how” behind every detail is what motivates me to learn and grow each and every day.
    </>
  ),
  personalWebsiteUrl: "https://tmfsousa.com",
  contact: {
    email: "temporario@tmfsousa.com",
    tel: "925464872",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ghostcatlol",
        icon: GitHubIcon,
      },
     /* {
        name: "LinkedIn",
        url: "",
        icon: LinkedInIcon,
      },*/
      
    ],
  },
  education: [
    {
      school: "NOVA School of Science and Technology",
      degree: "Bachelor’s degree in Electrical and Computer Engineering ",
      start: "2025",
      end: "Present",
    },
  ],
  skills: [
    "Problem-solving",
    "C",
    "Arduino",
    "Design Systems",
  ],
  projects: [
   {
      title: "EEPROM PROGRAMMER",
      techStack: ["Logic systems", "Design", "ROM"],
      description:
        "Desenvolvido em uma breadboard, que permite escolher o endereço desejado para gravar a combinação de bits",
      logo: MonitoLogo,
      link: {
        label: "EEPROM",
        href: "",
      },
    },
   
  ],
} as const;
