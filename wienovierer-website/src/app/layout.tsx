import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wienovierer - Profesyonel Tamir & Tadilat Hizmetleri',
  description: 'Wien, Avusturya, Almanya ve Macaristan\'da profesyonel elektrik, su tesisatı, boya, parke, banyo mutfak yenileme ve ev tadilat hizmetleri. 7/24 acil servis.',
  keywords: 'tamir, tadilat, elektrik, su tesisatı, boya, parke, banyo, mutfak, wien, avusturya, almanya, macaristan',
  authors: [{ name: 'Wienovierer' }],
  creator: 'Wienovierer',
  publisher: 'Wienovierer',
  robots: 'index, follow',
  openGraph: {
    title: 'Wienovierer - Profesyonel Tamir & Tadilat',
    description: 'Wien, Avusturya, Almanya ve Macaristan\'da profesyonel ev tadilat hizmetleri',
    url: 'https://wienovierer.com',
    siteName: 'Wienovierer',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wienovierer - Profesyonel Tamir & Tadilat',
    description: 'Wien, Avusturya, Almanya ve Macaristan\'da profesyonel ev tadilat hizmetleri',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
