import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "株式会社森本石油｜石川県穴水町のフルサービスガソリンスタンド",
  description:
    "石川県穴水町のフルサービスガソリンスタンド。給油、カーメンテナンス、車両販売、生命保険のご相談、灯油配達まで。お茶のおもてなしとともに、地域に寄りそうサービスをご提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaru.className} bg-cream text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
