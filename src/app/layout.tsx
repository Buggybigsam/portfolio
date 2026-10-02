import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#3b7eff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buggybigsam.github.io/portfolio"),
  title: "Ebenezer A.A Sam | IT & Full-Stack Software Developer",
  description:
    "Ebenezer A.A Sam — IT Specialist & Full-Stack Software Developer from Ghana. Building fast, reliable web applications, bespoke business systems, and AI integrations. Founder of Saint Tech Solutions.",
  keywords: [
    "Ebenezer A.A Sam",
    "Ebenezer Sam",
    "Buggybigsam",
    "Saint Tech Solutions",
    "IT Specialist Ghana",
    "Full-Stack Developer Ghana",
    "Software Engineer Accra",
    "Information Technology Ghana",
    "Ghana Communication Technology University",
    "GCTU",
    "Next.js Developer Ghana",
    "TypeScript Developer",
    "Python Developer",
    "Web Developer Ghana",
  ],
  authors: [{ name: "Ebenezer A.A Sam", url: "https://github.com/Buggybigsam" }],
  creator: "Ebenezer A.A Sam",
  publisher: "Ebenezer A.A Sam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: "https://buggybigsam.github.io/portfolio",
    title: "Ebenezer A.A Sam | IT & Full-Stack Software Developer",
    description:
      "Ebenezer A.A Sam — IT Specialist & Full-Stack Developer based in Ghana. Founder of Saint Tech Solutions. Explore projects, engineering capabilities, and open source work.",
    images: [
      {
        url: "/images/ebenezer-sam.png",
        width: 1200,
        height: 630,
        alt: "Ebenezer A.A Sam — IT & Full-Stack Software Developer",
      },
    ],
    locale: "en_GH",
    siteName: "Ebenezer A.A Sam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebenezer A.A Sam | IT & Full-Stack Software Developer",
    description:
      "Ebenezer A.A Sam — IT Specialist & Full-Stack Developer based in Ghana. Founder of Saint Tech Solutions.",
    images: ["/images/ebenezer-sam.png"],
  },
  alternates: {
    canonical: "https://buggybigsam.github.io/portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ebenezer A.A Sam",
    alternateName: "Buggybigsam",
    jobTitle: "IT & Full-Stack Software Developer",
    url: "https://buggybigsam.github.io/portfolio",
    image: "https://buggybigsam.github.io/portfolio/images/ebenezer-sam.png",
    sameAs: [
      "https://github.com/Buggybigsam",
      "https://www.linkedin.com/in/sam-ebenezer-6115b540b/",
      "https://www.instagram.com/buggy_bigsam",
      "https://sainttechsolutions.github.io/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ghana Communication Technology University",
    },
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "OpenCV",
      "PostgreSQL",
      "Information Technology",
      "Cloud Systems",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
