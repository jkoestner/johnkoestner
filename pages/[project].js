import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { SEO } from '@components';
import { Icon } from '@components/icons';
import { getFeaturedProjects } from '@lib/markdown';

// Maps URL slug → content folder name
const projectSlugMap = {
  morai: 'Morai',
  folioflex: 'FolioFlex',
  osllmh: 'Osllmh',
  pensieve: 'Pensieve',
};

const imageMap = {
  morai: '/images/featured/morai.png',
  folioflex: '/images/featured/folioflex.png',
  osllmh: '/images/featured/osllmh.png',
  pensieve: '/images/featured/pensieve.png',
};

const StyledProjectPage = styled.main`
  padding: 200px 0 100px;

  @media (max-width: 768px) {
    padding: 150px 0 80px;
  }
`;

const StyledBackLink = styled.div`
  margin-bottom: 50px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      gap: 10px;
    }

    &:after {
      display: none;
    }
  }
`;

const StyledHero = styled.header`
  margin-bottom: 50px;

  .project-overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    margin: 0 0 10px;
  }

  h1 {
    color: var(--lightest-slate);
    font-size: clamp(36px, 7vw, 70px);
    font-weight: 600;
    line-height: 1.1;
    margin: 0 0 20px;
  }

  .project-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;

    .cta-button {
      ${({ theme }) => theme.mixins.smallButton};
    }

    .icon-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--lightest-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        color: var(--green);
      }

      &:after {
        display: none;
      }

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;

  li {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--green);
    padding: 5px 12px;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
  }
`;

const StyledProjectImage = styled.div`
  margin: 50px 0;
  border-radius: var(--border-radius);
  overflow: hidden;
  ${({ theme }) => theme.mixins.boxShadow};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const StyledProjectContent = styled.div`
  color: var(--light-slate);
  font-size: var(--fz-lg);
  line-height: 1.7;

  p {
    margin: 0 0 20px;
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  ul {
    padding-left: 20px;

    li {
      margin-bottom: 8px;
    }
  }
`;

export default function ProjectPage({ project, slug }) {
  const { frontmatter, html } = project;
  const { title, tech, github, external, cta } = frontmatter;
  const imageSrc = imageMap[slug];
  // Only show live demo if there's a real external URL (not just a GitHub link)
  const liveUrl = cta || (external && !external.includes('github.com') ? external : null);

  return (
    <>
      <SEO title={title} />
      <StyledProjectPage>
        <StyledBackLink>
          <Link href="/#projects">← Projects</Link>
        </StyledBackLink>

        <StyledHero>
          <p className="project-overline">Featured Project</p>
          <h1>{title}</h1>

          {tech && tech.length > 0 && (
            <StyledTechList>
              {tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </StyledTechList>
          )}

          <div className="project-links">
            {liveUrl && (
              <a href={liveUrl} className="cta-button" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link">
                <Icon name="GitHub" />
                GitHub
              </a>
            )}
          </div>
        </StyledHero>

        {imageSrc && (
          <StyledProjectImage>
            <Image
              src={imageSrc}
              alt={title}
              width={1200}
              height={800}
              priority
            />
          </StyledProjectImage>
        )}

        <StyledProjectContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledProjectPage>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(projectSlugMap).map(slug => ({ params: { project: slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const folderName = projectSlugMap[params.project];
  const allFeatured = await getFeaturedProjects();
  const project = allFeatured.find(p => p.slug === folderName);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
      slug: params.project,
    },
  };
}
