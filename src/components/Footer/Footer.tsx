import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as="footer"
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"transparent"}
    >
      <Text my={7}>
        ניצן כהן &copy; 2024
      </Text>
    </Flex>
  );
}

export default Footer;
