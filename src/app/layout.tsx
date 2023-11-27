import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "itee",
  description: "First Collection, 404 Hoodie, 403 Hoodie, 503 Hoodie, Http Status Code Hoodie",
  openGraph: {
    title: "itee",
    description: "First Collection, 404 Hoodie, 403 Hoodie, 503 Hoodie, Http Status Code Hoodie",
    images: [
      {
        url: "https://itee.vercel.app/og-itee.png",
        width: 1200,
        height: 630,
        alt: "itee | First Collection",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
