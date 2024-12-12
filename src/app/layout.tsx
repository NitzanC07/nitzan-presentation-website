import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { varela_round } from "@/utils/fonts";
import { Flex } from "@chakra-ui/react";

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
          <Flex
            flexDir={"column"}
            bgImage="linear-gradient(#D4EBF8, #fff, #D4EBF8)"
          >
            {/* <Header backgroundColor='transparent' /> */}
            {children}
            {/* <Footer /> */}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
