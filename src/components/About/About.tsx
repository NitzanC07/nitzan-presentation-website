import { varelaRound } from "@/app/fonts";
import { Flex, Text } from "@chakra-ui/react";

function About() {
  return (
    <Flex
      bgColor={"gray.100"}
      w={'100%'}
      h={400}
      justifyContent={"center"}
      alignItems={"flex-start"}
      m={0}
      mt='60px'
      p={5}
    >
      <Text className={varelaRound.className} fontSize={20}>אודות</Text>
    </Flex>
  );
}

export default About;
