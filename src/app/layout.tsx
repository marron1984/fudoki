import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fudoki - Brand the unspoken.",
  description:
    "ブランドの本質を引き出し、唯一無二の世界観を構築する。fudokiは、言語化されていない価値を形にするブランディングスタジオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
