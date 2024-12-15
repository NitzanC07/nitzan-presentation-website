import * as React from "react";
import type { Metadata } from "next";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { varela_round } from "@/utils/fonts";
import { Flex } from "@chakra-ui/react";
import SideNavigator from "@/components/SideNavigator/SideNavigator";

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
    <Flex
      flexDir={"column"}
      bgImage="linear-gradient(orange.100, white, orange.100)"
    >
      <Header backgroundColor="gray.300" />
      {children}
      <Footer />
    </Flex>
  );
}
