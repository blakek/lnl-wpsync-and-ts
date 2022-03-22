import { getProp } from "./tslib";

const user = {
  username: "blakek",
  name: "Blake Knight",
  roles: ["repo:write", "repo:read", "repo:create", "repo:delete"],
};

export const username = getProp(user, "username");
export const roleTypo = getProp(user, "role");
