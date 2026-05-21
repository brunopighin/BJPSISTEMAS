import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  },
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
</head>
      <body className="bg-[#050508] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
