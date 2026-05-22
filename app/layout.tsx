import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "BathX | Luxury Bath Fittings & Sanitaryware",
  description: "Curators of modern luxury wellness spaces. Discover our collections of designer faucets, thermostatic showers, freestanding bathtubs, and smart sanitaryware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-zinc-50">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

