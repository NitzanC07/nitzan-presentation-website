import { Box, Heading, Text } from "@chakra-ui/react";
import SubHeadingBox from "./SubHeadingBox";

interface FrameClauseProps {
  textContent: string[];
  title?: string;
  borderColor?: string;
}

function FrameClause({ textContent, title, borderColor }: FrameClauseProps) {
  return (
    <Box
      w="90%"
      mx="auto"
      p={4}
      mt={10}
      mb={5}
      borderWidth={2}
      borderColor={borderColor ? `${borderColor}` : "#C5A880"}
      borderRadius={15}
      bgColor="white"
    >
      {title && (
        <Heading
          as="h3"
          fontFamily="var(--font-varela_round)"
          fontSize={19}
          mx={[3, 3, 7, 0]}
          mb={3}
          p={0}
          color={borderColor ? `${borderColor}` : "#C5A880"}
          tabIndex={1}
        >
          {title}
        </Heading>
      )}
      {textContent.map((paragraph, i) => (
        <Text
          key={i}
          as="p"
          fontSize={15}
          mx={[3, 3, 7, 0]}
          my={0}
          p={0}
          pb={2}
          color={"#0F0F0F"}
          tabIndex={1}
        >
          {paragraph}
        </Text>
      ))}
    </Box>
  );
}

export default FrameClause;
