import Project from "../types/project";
import { skills } from "./skills";


const cardsAgainstVenture = {
  title: "Cards Against Venture",
  link: "https://apolinargroup.com",
  imageUrl: "/project-apolinar.jpeg",
  slug: "apolinar",
  snippet: "Marketing website for Apolinar Group - a web agency in New Zealand",
  description: `
        Apolinar is an award-winning digital team in New Zealand. I worked on
        implementing the design of their landing page.
      `,
  skills: [skills.html, skills.sass, skills.js],
  testimonials: [
    {
      name: "Judith Black",
      position: "CEO, Tuple",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
      imageUrl: "/profile.jpg",
    },
  ],
};

export const projects: { [key: string]: any } = {
  "cards-against-venture": {
    ...cardsAgainstVenture,
  },
}
