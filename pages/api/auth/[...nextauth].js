import NextAuth from 'next-auth/next';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import nodemailer from 'nodemailer';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Email and Password',
    //   credentials: {
    //     email: { label: 'Email', type: 'email', placeholder: 'Your Email' },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //       placeholder: 'Your Password',
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     try {
    //       const user = await prisma.user.findUnique({
    //         where: {
    //           email: credentials.email,
    //         },
    //       });
    //       if (!user) {
    //         throw new Error('No account was found with that email address');
    //       }
    //       if (await bcrypt.compare(credentials.password, user.password)) {
    //         return {
    //           id: user.id,
    //           userName: user.userName,
    //           email: user.email,
    //         };
    //       } else return null;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   },
    // }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: 'test',
    encryption: true,
  },
});
