# Personal Website

My personal website built with Next.js and React. Visit it at [https://johnkoestner.com/](https://jkoestner.github.io/)

## Tech Stack

- **Framework:** Next.js 14 (Static Site Generation)
- **Styling:** styled-components
- **Animations:** ScrollReveal, anime.js
- **Content:** Markdown with frontmatter
- **Deployment:** GitHub Pages

## Color Scheme

- **French Laundry Blue** (#3a4660) - Primary background
- **Comfortably Tan** (#c9af98) - Text and secondary elements
- **Peachy Kreme** (#ed8a63) - Accent color
- **Brown Bonnet** (#845007) - Dark accents

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```
Ensure that github pages points to the `gh-pages` branch and not the `main` branch

## Adding Content

### Projects
Add markdown files to `content/projects/`:
```markdown
---
date: '2024-01-01'
title: 'Project Name'
github: 'https://github.com/username/repo'
external: 'https://example.com'
tech:
  - React
  - Node.js
showInProjects: true
---
Project description...
```

### Featured Projects
Create folders in `content/featured/` with `index.md`:
```markdown
---
date: '1'
title: 'Featured Project'
cover: './image.png'
github: 'https://github.com/username/repo'
external: 'https://example.com'
tech:
  - Technology 1
---
Description...
```

### Experience
Add markdown files to `content/jobs/`:
```markdown
---
date: '2020-01-01'
title: 'Job Title'
company: 'Company Name'
location: 'City, State'
range: 'Month Year - Present'
url: 'https://company.com'
---
- Responsibility 1
- Responsibility 2
```

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

## License

MIT
