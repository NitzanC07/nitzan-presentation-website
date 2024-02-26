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
      borderColor={borderColor ? `${borderColor}` : "orange.200"}
      borderRadius={15}
      bgColor="white"
    >
      {title && (
        <Heading
          as="h3"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={19}
          mx={[3, 3, 7, 0]}
          mb={3}
          p={0}
          tabIndex={1}
        >
          {title}
        </Heading>
      )}
      {textContent.map((paragraph, i) => (
        <Text
          key={i}
          as="p"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={15}
          mx={[3, 3, 7, 0]}
          my={0}
          p={0}
          pb={2}
          tabIndex={1}
        >
          {paragraph}
        </Text>
      ))}
    </Box>
  );
}

export default FrameClause;
