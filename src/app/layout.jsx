import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Nova Store | Modern Product Listing App",
    template: "%s | Nova Store",
  },
  description:
    "A modern e-commerce product listing platform built with Next.js 15, Tailwind CSS, and Express.js.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "E-commerce",
    "Product Listing",
    "Nova Store",
    "Web Development",
    "JavaScript",
  ],
  authors: [{ name: "Hadi Al Hamza" }],
  applicationName: "Nova Store",
  icons: {
    icon: "/favicon.ico",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jakarta.variable} min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
