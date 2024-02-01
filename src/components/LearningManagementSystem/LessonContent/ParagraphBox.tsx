import styles from "./styles.module.scss";
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
          mx={[3, 3, 7, 0]}
          mt={0}
          mb={4}
          p={0}
          tabIndex={1}
        >
          {par}
        </Text>
      ))}
    </>
  );
}

export default ParagraphBox;
