"use client";
import { useState } from "react";
import { Button, Flex, Heading, Image, Menu } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import SideNavigator from "../SideNavigator/SideNavigator";

interface headerProps {
  backgroundColor?: string;
}

function Header({ backgroundColor }: headerProps) {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const openCloseMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={backgroundColor || "gray.300"}
      pos={"fixed"}
      w={"100%"}
      px={[5, 10]}
      height={"60px"}
      zIndex={1}
    >
      <Heading fontFamily="var(--font-varela_round)" fontSize={[18, 25, 30]}>
        {path.startsWith("/courses") ? "NCL" : "ניצן כהן"}
      </Heading>

      {path.startsWith("/courses") && (
        <Button
          bgColor={"transparent"}
          _hover={{ bgColor: "transparent" }}
          border={"none"}
          onClick={openCloseMenu}
        >
          <Image src="\images\iconsAndSymbols\menu-icon.svg" alt="menu-icon" />
        </Button>
      )}

      {isOpen && <SideNavigator />}
    </Flex>
  );
}

export default Header;
