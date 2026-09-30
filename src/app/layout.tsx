import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/config/business";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: `${businessConfig.businessName} | Instalação e Manutenção de Ar-Condicionado em BH`,
  description: "Especialistas em instalação, manutenção e higienização de ar-condicionado em Belo Horizonte (BH). Atendimento residencial e empresarial. Orçamento via WhatsApp!",
  keywords: "ar condicionado bh, instalação ar condicionado belo horizonte, manutenção ar condicionado bh, climatização comercial, limpar ar condicionado bh, tecnico ar condicionado bh",
  alternates: {
    canonical: "https://sancruzclimatizacao.com.br",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  openGraph: {
    title: `${businessConfig.businessName} | Especialistas em Ar-Condicionado em BH`,
    description: "Instalação e manutenção de ar-condicionado em Belo Horizonte. Isenção de taxa de visita para BH. Fale com a gente no WhatsApp!",
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: "https://sancruzclimatizacao.com.br/images/logo.png" }],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": businessConfig.businessName,
  "image": "https://sancruzclimatizacao.com.br/images/logo.png",
  "url": "https://sancruzclimatizacao.com.br",
  "telephone": businessConfig.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Belo Horizonte",
    "addressRegion": "MG",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -19.9208,
    "longitude": -43.9378
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${instrumentSans.className} antialiased bg-slate-50 text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
