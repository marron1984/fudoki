import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUDOKI — 風土を、記す。",
  description:
    "FUDOKI PRODUCTION｜産地の意志を、一皿の物語へ。生産者と料理人をつなぐ代弁者として、食材の価値を正しく・美しく翻訳します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
