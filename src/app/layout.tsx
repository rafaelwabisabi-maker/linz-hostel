import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Linz Hostel: The Social Impact Hub",
  description:
    "Nobody stays a stranger. A 90-bed social impact hostel in Linz, Austria — where tourists become makers, strangers become neighbours, and every stay funds a social mission.",
  openGraph: {
    title: "Linz Hostel: The Social Impact Hub",
    description:
      "Turning Austria's loneliness crisis into its greatest community innovation. 90-bed social impact hostel launching 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
