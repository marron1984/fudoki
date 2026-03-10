import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fudoki - ブランドの風土を、記す。",
  description:
    "fudokiは、ブランドの本質を引き出し、一貫したブランド体験を構築するブランディングサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
