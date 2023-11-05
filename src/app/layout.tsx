import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "itee",
  description: "First Collection Pre-Order",
  openGraph: {
    title: "itee",
    description: "First Collection Pre-Order",
    images: [
      {
        url: "https://itee.vercel.app/og-itee.png",
        width: 1200,
        height: 630,
        alt: "itee | First Collection Pre-Order",
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
