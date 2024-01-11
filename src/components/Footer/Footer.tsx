import { varelaRound } from "@/app/fonts";
import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} bgColor={'gray.200'}>
        <Text className={varelaRound.className} my={7}>ניצן כהן &copy; 2024</Text>
    </Flex>
  )
}

export default Footer