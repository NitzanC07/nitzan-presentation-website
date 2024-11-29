import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { varela_round } from "@/utils/fonts";



export const metadata: Metadata = {
  title: "Nitzan Cohen",
  description: "Nitzan Cohen portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={varela_round}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
