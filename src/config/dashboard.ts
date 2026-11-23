import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "REVENUE · OPERATIONS",
  heading: "Beacon keeps the operating record visible, governed, and ready for action.",
  summary: "Landing pages and consent-aware forms, Lead identity and segmentation, Versioned nurture journeys are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create campaign", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "campaign.manage", metricLabel: "Beacon operating health",
  metrics: [{"label":"Known leads","value":"84,220","change":"+4.8%","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Journey conversion","value":"12.6%","change":"↗ 1.4%","context":"operational window","tone":"positive","progress":"76%"},{"label":"Consent coverage","value":"99.1%","change":"742 unknown","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Attributed pipeline","value":"$3.2M","change":"this quarter","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active marketing campaigns", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"BEA-842 · Cloud modernization guide","secondary":"Landing pages and consent-aware forms","tertiary":"Updated today","status":"Draft","accent":"violet"},{"id":2,"primary":"BEA-831 · Executive roundtable nurture","secondary":"Lead identity and segmentation","tertiary":"Evidence current","status":"Review","accent":"lime"},{"id":3,"primary":"BEA-820 · Security assessment launch","secondary":"Versioned nurture journeys","tertiary":"Updated today","status":"Active","accent":"cyan"},{"id":4,"primary":"BEA-809 · Partner referral programme","secondary":"Campaign attribution","tertiary":"Evidence current","status":"Complete","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Landing pages and consent-aware forms", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Lead identity and segmentation", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Versioned nurture journeys", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Lead identity and segmentation has the clearest next action.",
  insightBody: "The recommendation is grounded in current campaign records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Marketing campaign", modalEyebrow: "NEW MARKETING CAMPAIGN", modalTitle: "Add marketing campaign",
  formFields: [
    { name: "title", label: "Marketing campaign title", placeholder: "Cloud modernization guide" },
    { name: "owner", label: "Owner", placeholder: "Campaign manager" },
    { name: "reference", label: "Reference", placeholder: "BEA-843" },
  ],
  defaultSecondary: "Landing pages and consent-aware forms", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The campaign inherits workspace visibility, requires campaign.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create campaign",
};
