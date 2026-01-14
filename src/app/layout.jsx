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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jakarta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
