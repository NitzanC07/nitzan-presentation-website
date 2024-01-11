import { varelaRound } from "@/app/fonts";
import { Flex, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex
      bgColor={"gray.100"}
      w={'100%'}
      h={400}
      justifyContent={"center"}
      alignItems={"flex-start"}
      m={0}
      p={5}
    >
      <Text className={varelaRound.className} fontSize={20}>יצירת קשר</Text>
    </Flex>
  );
}

export default Contact;
