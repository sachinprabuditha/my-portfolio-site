// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import CursorEffect from "@/components/CursorEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Italic serif used for the editorial accent words in section headings.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin's Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required by next-themes: it sets the theme
    // class on <html> before React hydrates, which would otherwise mismatch.
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            {children}
            <CursorEffect />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
