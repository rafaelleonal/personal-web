const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const TECH_ICONS: Record<string, string> = {
  React: `${BASE}/react/react-original.svg`,
  "React Native": `${BASE}/react/react-original.svg`,
  "Next.js": `${BASE}/nextjs/nextjs-original.svg`,
  Astro: `${BASE}/astro/astro-original.svg`,
  "Tailwind CSS": `${BASE}/tailwindcss/tailwindcss-original.svg`,
  Storybook: `${BASE}/storybook/storybook-original.svg`,
  Turborepo: `${BASE}/vercel/vercel-original.svg`,
  JavaScript: `${BASE}/javascript/javascript-original.svg`,
  TypeScript: `${BASE}/typescript/typescript-original.svg`,
  SQL: `${BASE}/postgresql/postgresql-original.svg`,
  GraphQL: `${BASE}/graphql/graphql-plain.svg`,
  Jest: `${BASE}/jest/jest-plain.svg`,
  "React Testing Library": `${BASE}/react/react-original.svg`,
  Cypress: `${BASE}/cypressio/cypressio-original.svg`,
  Playwright: `${BASE}/playwright/playwright-original.svg`,
  "Node.js": `${BASE}/nodejs/nodejs-original.svg`,
  Express: `${BASE}/express/express-original.svg`,
  Git: `${BASE}/git/git-original.svg`,
  Docker: `${BASE}/docker/docker-original.svg`,
  Jira: `${BASE}/jira/jira-original.svg`,
  Figma: `${BASE}/figma/figma-original.svg`,
  Postman: `${BASE}/postman/postman-original.svg`,
  Claude: `${BASE}/postman/claude-original.svg`,
  Nestjs: `${BASE}/nestjs/nestjs-original.svg`,
  Prisma: `${BASE}/prisma/prisma-original.svg`,
};

export const DARK_ICONS = new Set(["Next.js", "Express", "Cypress"]);
