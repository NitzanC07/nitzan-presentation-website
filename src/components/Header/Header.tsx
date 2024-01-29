import { varelaRound } from "@/app/fonts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"gray.300"}
      pos={'fixed'}
      w={'100%'}
      h={'70px'}
      px={10}
      zIndex={1}
    >
      <Heading style={{'fontFamily': 'Varela Round, sans-serif'}} fontSize={50}>
        ניצן כהן
      </Heading>
      <Box className={varelaRound.className} fontSize={20} bgColor={"gray.200"}>
        Navigator
      </Box>
    </Flex>
  );
}

export default Header;
