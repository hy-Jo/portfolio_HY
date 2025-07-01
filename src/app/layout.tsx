import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Inter, Noto_Sans_KR } from "next/font/google";
import Nav from "../components/nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "HY Jo | Backend & AI Developer Portfolio",
  description: "HY Jo의 경력, 기술 스택, AI 프로젝트 성과를 담은 포트폴리오 사이트.",
  openGraph: {
    title: "HY Jo | Backend & AI Developer Portfolio",
    description: "HY Jo의 경력, 기술 스택, AI 프로젝트 성과를 담은 포트폴리오 사이트.",
    url: "https://your-domain.com/",
    siteName: "HY Jo 포트폴리오",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HY Jo 포트폴리오 오픈그래프 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} ${noto.variable} bg-background text-foreground min-h-screen antialiased transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="py-2">
            <Nav />
          </div>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
