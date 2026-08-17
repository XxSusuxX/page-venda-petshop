import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetNexus — Sistema de Gestão para Pet Shops | Agenda, Operação e Painel do Tutor",
  description:
    "O sistema mais completo para pet shops, banho & tosa e clínicas veterinárias. Agenda visual, operação ao vivo, PDV, WhatsApp automático e um painel exclusivo para o tutor do pet. Pronto em 48h.",
  keywords: [
    "sistema pet shop",
    "gestão pet shop",
    "software banho e tosa",
    "agenda pet shop",
    "sistema veterinário",
    "SaaS pet shop",
    "PetNexus",
  ],
  openGraph: {
    title: "PetNexus — Sistema de Gestão para Pet Shops",
    description:
      "Pare de perder clientes por desorganização. Sistema completo com agenda, operação ao vivo e painel do tutor.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${hankenGrotesk.className} min-h-screen bg-matte-canvas text-white antialiased`}
      >
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}
