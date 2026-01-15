import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@novastore.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Dummy user
        const user = {
          id: "1",
          name: "Admin User",
          email: "admin@novastore.com",
        };

        if (
          credentials?.email === "admin@novastore.com" &&
          credentials?.password === "password123"
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "supersecretkey123",
});

export { handler as GET, handler as POST };
