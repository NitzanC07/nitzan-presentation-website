import { varelaRound } from "@/app/fonts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"gray.300"}
    >
      <Text className={varelaRound.className} fontSize={50}>
        ניצן כהן
      </Text>
      <Box className={varelaRound.className} fontSize={20} bgColor={"gray.200"}>
        Navigator
      </Box>
    </Flex>
  );
}

export default Header;
