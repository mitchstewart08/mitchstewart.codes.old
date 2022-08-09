import SiteLayout from "../components/SiteLayout";
import Project from "../components/Project";
import Icon from "../components/Icon";
import React from "react";
import { skills } from "../content/skills";
import { projects } from "../content/projects";
import IProject from "../types/project";
import IExperience from "../types/experience";
import { GetStaticProps } from "next";
import { experiences } from "../content/experiences";
import DetailedExperience from "../components/DetailedExperience";

interface ProjectPageProps {
  slug: string;
}

export default function ProjectPage() {
  <SiteLayout>
    <main className="container text-center my-24">
      <h1 className="mb-5">404</h1>
      <p>This page could not be found.</p>
    </main>
  </SiteLayout>
}

export const getStaticPaths = async () => {
  const paths = Object.keys(skills).map((key) => ({
    params: { slug: skills[key].slug },
  }));

  return {
    paths,
    // fallback: "blocking",
    fallback: false //to make it work with next export
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    const { slug } = context.params;

    if (slug) {
      // @ts-ignore
      const skill = skills[slug];

      if (skill) {
        return {
          props: {
            slug,
          },
        };
      }
    }
  }

  return {
    notFound: true,
  };
};
