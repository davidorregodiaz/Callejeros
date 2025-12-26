import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
    accessToken: string;
  }
  export interface User {
    id: string;
    imageUrl: string;
    email: string;
    name: string;
    accessToken: string;
    roles: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    imageUrl: string;
    email: string;
    name: string;
    roles: string[];
    accessToken: string;
  }
}
