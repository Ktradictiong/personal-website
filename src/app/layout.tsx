import type { Metadata, Viewport } from "next";
import {
  Architects_Daughter,
  Long_Cang,
  Mali,
  Noto_Sans_SC,
  Zhi_Mang_Xing
} from "next/font/google";
import "./globals.css";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"]
});

const mali = Mali({
  variable: "--font-mali",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  fallback: ["Comic Sans MS", "cursive"]
});

const architects = Architects_Daughter({
  variable: "--font-architects",
  weight: "400",
  display: "swap",
  preload: false,
  fallback: ["Comic Sans MS", "cursive"]
});

const longCang = Long_Cang({
  variable: "--font-long-cang",
  weight: "400",
  display: "swap",
  preload: false,
  fallback: ["KaiTi", "serif"]
});

const zhiMang = Zhi_Mang_Xing({
  variable: "--font-zhi-mang",
  weight: "400",
  display: "swap",
  preload: false,
  fallback: ["KaiTi", "serif"]
});

export const metadata: Metadata = {
  title: "Locan | 摄影师个人档案",
  description: "Locan 的手绘风摄影作品集、创作复盘与 AIGC 实验室。"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${notoSansSc.variable} ${mali.variable} ${architects.variable} ${longCang.variable} ${zhiMang.variable} min-h-screen overflow-x-hidden font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
