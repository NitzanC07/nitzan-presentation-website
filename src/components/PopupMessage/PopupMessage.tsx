import { Button, Flex, Text } from "@chakra-ui/react";

interface PopupMessageProps {
  continuePlay: () => void;
  content: string;
  buttonText: string;
}
function PopupMessage({
  continuePlay,
  content,
  buttonText,
}: PopupMessageProps) {
  return (
    <Flex
      pos={"absolute"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={2}
      width={"100%"}
      height={"100%"}
      bgColor={"#000000aa"}
    >
      <Flex
        flexDirection={"column"}
        width={350}
        bgColor={"#fff"}
        border={"4px solid #244F98"}
        borderRadius={10}
        justifyContent={"center"}
        p={5}
      >
        <Text mb={5}>{content}</Text>
        <Button onClick={continuePlay} colorScheme="blue">
          {buttonText}
        </Button>
      </Flex>
    </Flex>
  );
}

export default PopupMessage;
