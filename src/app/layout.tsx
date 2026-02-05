import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { Press_Start_2P } from 'next/font/google'

import "./globals.css";

export const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export const titillium = Titillium_Web({
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
      <body className={`${titillium.variable} ${pixelFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
