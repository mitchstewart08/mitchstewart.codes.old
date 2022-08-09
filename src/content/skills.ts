import Skill from "../types/skill";

export const skills: { [key: string]: Skill } = {
  react: {
    name: "React",
    slug: "react",
    icon: "logos:react",
  },
  node: {
    name: "Node",
    slug: "node",
    icon: "fa-brands:node",
  },
  nextjs: {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    slug: "nextjs",
  },
  html: {
    name: "HTML",
    icon: "logos:html-5",
    slug: "html",
  },
  css: {
    name: "CSS",
    icon: "logos:css-3",
    slug: "css",
  },
  js: {
    name: "JavaScript",
    icon: "logos:javascript",
    slug: "js",
  },
  ts: {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    slug: "ts",
  },
  git: {
    name: "Git",
    icon: "fa-brands:git",
    slug: "git",
  },

  mysql: {
    name: "MySQL",
    icon: "logos:mysql",
    slug: "mysql",
  },
  redux: {
    name: "Redux",
    icon: "logos:redux",
    slug: "redux",
  },
  scrum: {
    name: "Scrum",
    slug: "scrum",
  },
  ux: {
    name: "UI/UX Design",
    slug: "ux",
  },
  tailwind: {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    slug: "tailwind",
  },
};

export const featuredSkills: Array<any> = [
  skills.react, skills.nextjs, skills.js,
  skills.ts, skills.node, skills.git, skills.mysql, skills.redux, skills.scrum, skills.ux, skills.tailwind, skills.css, skills.html,
]