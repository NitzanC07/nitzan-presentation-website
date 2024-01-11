import { varelaRound } from "@/app/fonts";
import { Flex, Text } from "@chakra-ui/react";

function Courses() {
  return (
    <Flex
      bgColor={"gray.200"}
      w={'100%'}
      h={400}
      justifyContent={"center"}
      alignItems={"flex-start"}
      m={0}
      p={5}
    >
      <Text className={varelaRound.className} fontSize={20}>קורסים</Text>
    </Flex>
  );
}

export default Courses;
