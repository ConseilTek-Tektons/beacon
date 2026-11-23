export const knowledgeArticles = [
  {
    "id": "consent",
    "title": "Consent and preferences",
    "summary": "Each lead purpose stores source, timestamp, notice version, jurisdiction, and withdrawal state.",
    "content": "Journey eligibility checks current consent at send time and records the decision.",
    "tags": [
      "consent",
      "preference",
      "lead"
    ]
  },
  {
    "id": "journeys",
    "title": "Versioned nurture journeys",
    "summary": "Published journeys are immutable versions with idempotent step execution.",
    "content": "A lead remains on its enrolled version unless an explicit migration is reviewed.",
    "tags": [
      "journey",
      "automation",
      "version"
    ]
  },
  {
    "id": "attribution",
    "title": "Attribution evidence",
    "summary": "Touchpoints retain campaign, channel, identity confidence, and event time.",
    "content": "Models are reproducible from raw events and never overwrite source evidence.",
    "tags": [
      "attribution",
      "campaign",
      "touchpoint"
    ]
  }
];
