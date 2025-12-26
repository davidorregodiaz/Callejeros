import { User } from "next-auth";

export const userIsInRole = (user: User, role: string) => {
  return user?.roles != null && user?.roles?.includes(role);
};
