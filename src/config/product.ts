import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "beacon",
  name: "Beacon",
  category: "Revenue",
  tagline: "Landing pages, forms and nurture on your own domain.",
  description: "A marketing automation platform for pages, forms, consented leads, segments, nurture workflows, and attribution.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/beacon",
  nav: [
  {
    "label": "Pages",
    "badge": "4"
  },
  {
    "label": "Forms"
  },
  {
    "label": "Audience"
  },
  {
    "label": "Journeys"
  },
  {
    "label": "Attribution"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "marketing_admin", label: "Marketing administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "campaign_manager", label: "Campaign manager" },
  ],
  ai: {
    name: "Beacon knowledge guide",
    description: "Ask grounded questions about landing pages and consent-aware forms, lead identity and segmentation, versioned nurture journeys, or operating policy.",
    systemPrompt: "You are Beacon's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain consent and preferences.","Explain versioned nurture journeys.","Explain attribution evidence."],
  },
};
