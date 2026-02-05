import React from 'react';
import styled from 'styled-components';
import { SEO, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import { getJobs, getProjects, getFeaturedProjects } from '@lib/markdown';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function IndexPage({ jobs, projects, featured }) {
  return (
    <>
      <SEO />
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs jobs={jobs} />
        <Featured featured={featured} />
        <Projects projects={projects} />
        <Contact />
      </StyledMainContainer>
    </>
  );
}

export async function getStaticProps() {
  const jobs = await getJobs();
  const projects = await getProjects();
  const featured = await getFeaturedProjects();

  return {
    props: {
      jobs,
      projects,
      featured,
    },
  };
}
