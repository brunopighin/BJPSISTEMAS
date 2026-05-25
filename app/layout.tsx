import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bjpsistemas.com"),
  title: "BJP SISTEMAS — Tecnología que transforma negocios",
  description:
    "Desarrollo web, sistemas personalizados, automatización e inteligencia artificial para negocios modernos. BJP SISTEMAS.",
  keywords: [
    "desarrollo web",
    "sistemas personalizados",
    "automatización",
    "inteligencia artificial",
    "software a medida",
    "BJP SISTEMAS",
  ],
  openGraph: {
    title: "BJP SISTEMAS — Tecnología que transforma negocios",
    description:
      "Desarrollo web, automatización e IA para negocios modernos.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BJP SISTEMAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BJP SISTEMAS — Tecnología que transforma negocios",
    description: "Desarrollo web, automatización e IA para negocios modernos.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BJP SISTEMAS",
  description:
    "Desarrollo web, sistemas personalizados, automatización e inteligencia artificial para negocios modernos.",
  url: "https://bjpsistemas.com",
  telephone: "+54-9-2323-654029",
  email: "bjpsistemas@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  sameAs: ["https://www.instagram.com/bjpsistemas"],
  knowsAbout: [
    "Desarrollo web",
    "E-commerce",
    "Software a medida",
    "Sistemas POS",
    "Inteligencia Artificial",
    "Automatización",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050508] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
