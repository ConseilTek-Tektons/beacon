import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Beacon RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "settings.manage")).toBe(true));
  it("keeps access policy away from operators", () => expect(hasPermission(["campaign_manager"], "access.manage")).toBe(false));
  it("maps identity groups", () => expect(resolveRolesFromClaims({ groups: ["beacon-managers"] })).toEqual(["marketing_admin"]));
});
