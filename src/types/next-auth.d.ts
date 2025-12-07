import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      imageUrl: string;
      email: string;
      role: string;
    } & DefaultSession['user'];
    accessToken: string;
  }

  interface User {
    id: string;
    imageUrl: string;
    email: string;
    name: string;
    role: string;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    role: string;
    accessToken: string;
  }
}