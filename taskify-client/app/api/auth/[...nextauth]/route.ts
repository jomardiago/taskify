import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

import { API_URL } from "@/lib/constants";

async function refreshToken(token: JWT): Promise<JWT> {
  const response = await axios.post(
    API_URL + "/auth/refresh",
    {},
    {
      headers: {
        authorization: `Refresh ${token.backendTokens.refreshToken}`,
      },
    }
  );

  return {
    ...token,
    backendTokens: response.data,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const { username, password } = credentials;

        const response = await axios.post(
          API_URL + "/auth/login",
          { username, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status == 401) {
          return null;
        }

        const user = response.data;
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    signOut: "/logout"
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
