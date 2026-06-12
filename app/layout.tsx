import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社森本石油",
  description:
    "石川県穴水町のフルサービスガソリンスタンド。カーメンテナンス、車両販売、生命保険のご相談など地域に密着したサービスをご提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
