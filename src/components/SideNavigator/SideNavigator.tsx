import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

function SideNavigator() {
  return (
    <Flex
      bgColor={"gray.300"}
      mt={"160px"}
      ml={0}
      p={5}
      w={["100%", "200px"]}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      pos={"fixed"}
      left={0}
    >
    <Link as={NextLink} href="/login" color={"black"} pb={5}>התחברות</Link>
    <Link as={NextLink} href="/register" color={"black"} pb={0}>הרשמה</Link>
    </Flex>
  );
}

export default SideNavigator;
