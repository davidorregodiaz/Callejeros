import { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          let url = process.env.NEXT_PUBLIC_API_URL + "auth/login";
          if (!url || url.trim() === "") {
            url = "http://localhost:5239/api/auth/login";
          }
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (!res.ok) return null;

          const data = await res.json();

          const user = {
            id: data.user?.id ?? null,
            email: data.user?.email ?? null,
            name: data.user?.username ?? null,
            role: data.user?.roles[0] ?? null,
            imageUrl: data.user?.imageUrl ?? null,
            accessToken: data.token ?? null,
          };

          return user;
        } catch (err) {
          console.error("Auth error:", err);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.role = user.role;
        token.name = user.name;
        token.imageUrl = user.imageUrl;
        token.accessToken = (user as User).accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.imageUrl = token.imageUrl as string;
        (session as Session).accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
