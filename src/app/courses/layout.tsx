import * as React from "react";
import type { Metadata } from "next";
import "../globals.css";

import { Providers } from "../providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { varela_round } from "@/utils/fonts";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "NCL courses",
  description: "Nitzan Cohen courses",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <Flex
        className={varela_round}
        flexDir={"column"}
        bgImage="linear-gradient(gray.300, gray.50, gray.300)"
      >
        <Header backgroundColor="gray.300" />
        {children}
        <Footer />
      </Flex>
    </html>
  );
}
