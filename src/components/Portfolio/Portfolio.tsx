import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Portfolio() {
  return (
    <Flex
      bgColor={"gray.100"}
      w={"100%"}
      h={400}
      justifyContent={"center"}
      alignItems={"flex-start"}
      m={0}
      p={5}
    >
      <Text fontSize={20}>
        פורטפוליו - תיק עבודות
      </Text>
    </Flex>
  );
}

export default Portfolio;
