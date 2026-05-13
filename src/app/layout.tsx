import type { Metadata } from "next";
import { Inter, Just_Me_Again_Down_Here, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const scriptFont = Just_Me_Again_Down_Here({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tautan Resmi | BWS Babel",
  description:
    "Kumpulan tautan resmi Balai Wilayah Bangka Belitung — Kementerian Pekerjaan Umum. Akses website, media sosial, dan layanan digital BWS Bangka Belitung.",
  keywords: [
    "BWS Bangka Belitung",
    "Balai Wilayah Sungai Bangka Belitung",
    "Kementerian Pekerjaan Umum",
    "linktree BWS Babel",
  ],
  openGraph: {
    title: "Tautan Resmi | BWS Babel",
    description:
      "Kumpulan tautan resmi Balai Wilayah Sungai Bangka Belitung — Kementerian PU.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", inter.variable, scriptFont.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
