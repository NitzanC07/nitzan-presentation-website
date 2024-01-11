// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Varela_Round } from "next/font/google";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
