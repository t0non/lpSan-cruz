import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/config/business";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.websiteUrl),
  title: {
    default: "Ar-Condicionado em BH | Instalação e Manutenção | San'Cruz",
    template: `%s | ${businessConfig.businessName}`
  },
  description: "Instalação, manutenção, conserto e higienização de ar-condicionado em Belo Horizonte e região. Atendimento residencial e comercial. Solicite seu orçamento.",
  keywords: ["ar condicionado bh", "instalação ar condicionado belo horizonte", "manutenção ar condicionado bh", "higienização de ar condicionado", "climatização comercial", "tecnico ar condicionado bh", "conserto ar condicionado bh", "pmoc bh"],
  authors: [{ name: businessConfig.ownerName }],
  creator: businessConfig.businessName,
  publisher: businessConfig.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: businessConfig.businessName,
    title: "Ar-Condicionado em BH | Instalação e Manutenção | San'Cruz",
    description: "Instalação, manutenção, conserto e higienização de ar-condicionado em Belo Horizonte e região. Atendimento residencial e comercial. Solicite seu orçamento.",
    images: [
      {
        url: "/images/hero_ac_tech.jpg",
        width: 1200,
        height: 630,
        alt: "Técnico da San'cruz Climatização realizando manutenção em ar-condicionado em Belo Horizonte",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessConfig.businessName} | Ar-Condicionado em BH`,
    description: "Instalação, manutenção e higienização de ar-condicionado em Belo Horizonte (BH).",
    images: ["/images/hero_ac_tech.jpg"],
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
