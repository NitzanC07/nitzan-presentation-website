import { Flex, Text } from "@chakra-ui/react";

function CoursesOverview() {
  return (
    <Flex
      bgColor={"gray.200"}
      w={"100%"}
      h={400}
      justifyContent={"center"}
      alignItems={"flex-start"}
      m={0}
      p={5}
    >
      <Text fontSize={20}>
        קורסים
      </Text>
    </Flex>
  );
}

export default CoursesOverview;
