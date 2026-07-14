export type PlannerSection = {
  title: string;
  items: string[];
};

export const plannerSections: PlannerSection[] = [
  {
    title: "Product",
    items: ["Product vision", "Problem statement", "Personas", "Competitor analysis"]
  },
  {
    title: "Planning",
    items: ["PRD", "TRD", "Features", "User stories", "Acceptance criteria"]
  },
  {
    title: "Engineering",
    items: ["Database schema", "ER diagram", "API specification", "Folder structure", "Tech stack", "Auth flow", "RBAC"]
  },
  {
    title: "UI",
    items: ["Wireframes", "Screen flow", "UI components"]
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD", "Deployment", "Environment variables"]
  },
  {
    title: "Project Management",
    items: ["GitHub issues", "Sprint plan", "Milestones", "Team handoff"]
  }
];

export const demoArtifacts = [
  "PRD and TRD",
  "Database model",
  "OpenAPI routes",
  "Architecture map",
  "README",
  "Deployment plan",
  "Testing strategy",
  "Codex build prompt"
];

export const stack = ["Next.js 16", "React 19", "Tailwind", "shadcn/ui", "NestJS", "PostgreSQL", "Prisma", "Cloudinary", "GPT-5.6", "Codex"];
