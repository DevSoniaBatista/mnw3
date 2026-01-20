import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "./globals.css";

const titillium = Titillium_Web({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mulheres na Web3",
  description: "Comunidade de mulheres na Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${titillium.variable} antialiased`}>{children}</body>
    </html>
  );
}
