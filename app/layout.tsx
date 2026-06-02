import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshana Karunarathna | Software Developer",
  description:
    "Personal portfolio of Harshana Karunarathna, Software Engineering student and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}