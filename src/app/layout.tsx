import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fudoki - 一次産業のブランディングスタジオ",
  description:
    "農業、漁業、林業、畜産——つくる人の想いと風土を引き出し、届くべき人へ届ける。fudokiは、一次産業に特化したブランディングスタジオです。",
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
