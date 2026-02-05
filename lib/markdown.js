import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(folder) {
  const fullPath = path.join(contentDirectory, folder);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const items = [];
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // For featured projects with their own directories
      const indexPath = path.join(fullPath, entry.name, 'index.md');
      if (fs.existsSync(indexPath)) {
        const fileContents = fs.readFileSync(indexPath, 'utf8');
        const { data, content } = matter(fileContents);
        const processedContent = await remark().use(html).process(content);
        const htmlContent = processedContent.toString();

        items.push({
          slug: entry.name,
          frontmatter: data,
          html: htmlContent,
        });
      }
    } else if (entry.name.endsWith('.md')) {
      // For individual markdown files
      const filePath = path.join(fullPath, entry.name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const htmlContent = processedContent.toString();

      items.push({
        slug: entry.name.replace(/\.md$/, ''),
        frontmatter: data,
        html: htmlContent,
      });
    }
  }

  return items;
}

export async function getJobs() {
  const jobs = await getMarkdownContent('jobs');
  return jobs.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) return 1;
    if (a.frontmatter.date > b.frontmatter.date) return -1;
    return 0;
  });
}

export async function getProjects() {
  const projects = await getMarkdownContent('projects');
  return projects
    .filter(project => project.frontmatter.showInProjects !== false)
    .sort((a, b) => {
      if (a.frontmatter.date < b.frontmatter.date) return 1;
      if (a.frontmatter.date > b.frontmatter.date) return -1;
      return 0;
    });
}

export async function getAllProjects() {
  const projects = await getMarkdownContent('projects');
  return projects.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) return 1;
    if (a.frontmatter.date > b.frontmatter.date) return -1;
    return 0;
  });
}

export async function getFeaturedProjects() {
  const featured = await getMarkdownContent('featured');
  return featured.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) return -1;
    if (a.frontmatter.date > b.frontmatter.date) return 1;
    return 0;
  });
}
