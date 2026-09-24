// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Body copy.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Headings, big marquee type and numerals.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Prabuditha - Software Engineer",
  description:
    "Sachin Prabuditha, a Software Engineer from Sri Lanka specializing in Flutter and mobile application development, building mobile banking apps in FinTech.",
  openGraph: {
    title: "Sachin Prabuditha - Software Engineer",
    description: "Building ideas into software. Flutter • Dart • FinTech • Software Engineering.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-cyan focus:px-5 focus:py-3 focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#051819",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "999px",
            },
          }}
        />
      </body>
    </html>
  );
}
