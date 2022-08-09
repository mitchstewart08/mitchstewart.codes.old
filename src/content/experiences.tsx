import Experience from "../types/experience";
import { skills } from "./skills";

export const experiences: Array<Experience> = [
  {
    position: "Full-Stack Engineer",
    company: "Freelance",
    dateStart: "Dec 2019",
    dateEnd: "Present",
    link: "",
    snippet: "Making people's dream products a reality",
    description: (
      <>
      </>
    ),
    skills: [
      skills.react,
      skills.nextjs,
      skills.contentful,
      skills.angular,
      skills.sass,
      skills.less,
      skills.ts,
      skills.bootstrap,
      skills.algolia,
      skills.redux,
    ],
  },
  {
    position: "Senior Full-Stack Engineer",
    company: "Best Version Media",
    dateStart: "Jan 2021",
    dateEnd: "Feb 2022",
    link: "https://www.bestversionmedia.com/",
    snippet: "Best Version Media serves local businesses and residents by providing professional, family-friendly publications.",
    description: (
      <p>
        Corebridge is a management tool for printing businesses. It&apos;s a
        large complex web app that calculates orders based on a number of costs
        like labor, machine, materials, etc. I worked on the frontend side using
        Angular with a team of 30+ devs and led tasking of user stories.
      </p>
    ),
    skills: [skills.angular, skills.js, skills.ts, skills.git, skills.scrum],
  },
  {
    position: "Front-end Engineer",
    company: "MarketChorus",
    dateStart: "Jan 2019",
    dateEnd: "Dec 2019",
    link: "https://marketchorus.com/",
    snippet:
      "Content Intelligence For Creators, Researchers & Publishers Powered by Machine Learning",
    description: (
      <p>
        I worked on a single page app for logistics quote management. I designed
        and developed a drag and drop form builder which allowed for users to
        resize and format various elements in the form.
      </p>
    ),
    skills: [
      skills.angular,
      skills.ux,
      skills.js,
      skills.ts,
      skills.spring,
      skills.java,
    ],
  },
];
