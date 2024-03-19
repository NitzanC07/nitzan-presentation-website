import { Box, Flex, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"gray.300"}
      pos={"fixed"}
      w={"100%"}
      px={[5, 10]}
      // py={3}
      h="60px"
      zIndex={1}
      
      >
      <Heading
        fontFamily="var(--font-varela_round)"
        fontSize={[18, 25, 30]}
      >
        NC Learning
      </Heading>
      <Box fontSize={[17, 20]} bgColor={"gray.200"}>
        Navigator
      </Box>
    </Flex>
  );
}

export default Header;
