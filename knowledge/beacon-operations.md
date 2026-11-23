# Beacon operations knowledge

## Consent and preferences

Each lead purpose stores source, timestamp, notice version, jurisdiction, and withdrawal state.

Journey eligibility checks current consent at send time and records the decision.

## Versioned nurture journeys

Published journeys are immutable versions with idempotent step execution.

A lead remains on its enrolled version unless an explicit migration is reviewed.

## Attribution evidence

Touchpoints retain campaign, channel, identity confidence, and event time.

Models are reproducible from raw events and never overwrite source evidence.

## Product boundary

Beacon does not supply third-party audience data or an advertising network. Deliverability and paid-media execution remain external integrations.
