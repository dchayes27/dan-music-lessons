import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Chayes | Music Lessons in Astoria, NY",
  description: "Guitar, piano, and music production lessons in Astoria, NY. Teaching kids 4+ and adults with a passion for music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
