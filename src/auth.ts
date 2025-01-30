import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "@/lib";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  throw new Error("Missiong github client id or secret");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ user, session }) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
