import { Flex, Text } from "@chakra-ui/react";

function Loading() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} my={300} p={0}>
      <Text
        as="p"
        style={{ fontFamily: "Varela Round, sans-serif" }}
        fontSize={18}
      >
        תוכן העמוד בטעינה...
      </Text>
    </Flex>
  );
}

export default Loading;
