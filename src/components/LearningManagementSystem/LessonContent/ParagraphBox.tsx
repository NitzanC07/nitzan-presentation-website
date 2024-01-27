import { Text } from "@chakra-ui/react";

interface ParagraphBoxProps {
  textContent: string[];
}

function ParagraphBox({ textContent }: ParagraphBoxProps) {
  return (
    <>
      {textContent.map((par, i) => (
        <Text
          key={i}
          as="p"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={18}
          py={4}
          tabIndex={4}
        >
          {par}
        </Text>
      ))}
    </>
  );
}

export default ParagraphBox;
