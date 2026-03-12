import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { SEO } from '@components';
import { Icon } from '@components/icons';
import { getFeaturedProjects } from '@lib/markdown';

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

const StyledProjectWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledProjectHeader = styled.header`
  margin-bottom: 40px;

  h1 {
    margin: 10px 0 0;
  }
`;

const StyledDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--lightest-navy);
  margin: 40px 0;
`;

const StyledMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .meta-description {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.7;
  }

  .meta-details {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .meta-section {
    h3 {
      color: var(--lightest-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 0 0 12px;
      color: var(--green);
    }
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--light-slate);

      &:not(:last-child)::after {
        content: '·';
        margin-left: 8px;
        color: var(--dark-slate);
      }
    }
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;

    li a {
      ${({ theme }) => theme.mixins.smallButton};
      display: inline-block;

      &.github-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`;

const StyledProjectImage = styled.div`
  margin-bottom: 80px;
  border-radius: var(--border-radius);
  overflow: hidden;
  ${({ theme }) => theme.mixins.boxShadow};

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--border-radius);
  }
`;

const StyledProjectContent = styled.div`
  color: var(--light-slate);
  font-size: var(--fz-lg);
  line-height: 1.7;

  h2 {
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    margin: 50px 0 20px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    margin: 40px 0 15px;
  }

  p {
    margin: 0 0 20px;
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  ul {
    padding: 0;
    margin: 0 0 20px;
    list-style: none;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  }
`;

export default function ProjectPage({ project, slug }) {
  const { frontmatter, html } = project;
  const { title, tech, github, external, cta, summary } = frontmatter;
  const imageSrc = imageMap[slug];
  const liveUrl = cta || (external && !external.includes('github.com') ? external : null);

  return (
    <>
      <SEO title={title} />

      <main>
        <StyledProjectWrapper>
          <div className="breadcrumb">
            <span className="arrow">&larr;</span>
            <Link href="/#projects">Projects</Link>
          </div>

          <StyledProjectHeader>
            <p className="overline">Featured Project</p>
            <h1 className="big-heading">{title}</h1>
          </StyledProjectHeader>

          <StyledDivider />

          <StyledMeta>
            <div className="meta-description">
              {summary || html && <span dangerouslySetInnerHTML={{ __html: html }} />}
            </div>

            <div className="meta-details">
              {tech && tech.length > 0 && (
                <div className="meta-section">
                  <h3>Built with</h3>
                  <ul className="tech-list">
                    {tech.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="meta-section">
                <h3>Links</h3>
                <ul className="links-list">
                  {liveUrl && (
                    <li>
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </li>
                  )}
                  {github && (
                    <li>
                      <a
                        href={github}
                        className="github-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon name="GitHub" />
                        View on GitHub
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </StyledMeta>

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
        </StyledProjectWrapper>
      </main>
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
