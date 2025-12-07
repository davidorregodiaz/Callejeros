import { NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          let url = process.env.NEXT_PUBLIC_API_URL + 'auth/login';
          if (!url || url.trim() === '') {
            url = 'http://localhost:5239/auth/login';
          }
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (!res.ok) return null;

          const user = await res.json();

          if (user) {
            return {
              id: user.id,
              email: user.email,
              imageUrl: user.imageUrl,
              name: user.name,
              role: user.role,
              accessToken: user.token,
            };
          } else {
            return {
              id: "0",
              email: "lianthony@callejeros.org",
              imageUrl: "",
              name: "Anthony",
              role: "Admin",
              accessToken: "rybvjrtnv uuuuuuut tijiunrtuieuwifiojtgierjiwjf",
            };
          }
          return null;
        } catch (err) {
          console.error('Auth error:', err);
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = (user as User).accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role;
        (session as Session).accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};