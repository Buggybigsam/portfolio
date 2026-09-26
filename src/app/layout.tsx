import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sasu.sasulabs.me"),
  title: "Ebenezer A.A Sam | IT & Full-Stack Software Developer",
  description:
    "Ebenezer A.A Sam — IT & Full-Stack Software Developer based in Ghana. Specialist in resilient web systems, cloud backends, and modern software architectures. Explore my work.",
  keywords: [
    "Ebenezer A.A Sam",
    "Ebenezer Sam",
    "IT Specialist Ghana",
    "Full-Stack Developer Ghana",
    "Information Technology Ghana",
    "Ghana Communication Technology University",
    "GCTU",
    "Software Developer",
    "Web Developer Ghana",
  ],
  authors: [{ name: "Ebenezer A.A Sam" }],
  openGraph: {
    type: "profile",
    url: "https://sasu.sasulabs.me/",
    title: "Ebenezer A.A Sam | IT & Full-Stack Software Developer",
    description:
      "Ebenezer A.A Sam — IT Specialist & Full-Stack Developer from Ghana. Available for technical projects and collaboration.",
    images: [
      {
        url: "/images/ebenezer-sam.png",
        width: 1200,
        height: 630,
        alt: "Ebenezer A.A Sam — IT & Software Developer",
      },
    ],
    locale: "en_GH",
    siteName: "Ebenezer A.A Sam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebenezer A.A Sam | IT & Full-Stack Software Developer",
    description:
      "Ebenezer A.A Sam — IT Specialist & Full-Stack Developer from Ghana. Available for technical projects and collaboration.",
    images: ["/images/ebenezer-sam.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="glow glow--top" aria-hidden="true"></div>
        <div className="glow glow--bottom" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
