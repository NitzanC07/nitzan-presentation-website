import { AddIcon } from "@chakra-ui/icons";
import { Heading, Icon } from "@chakra-ui/react";

interface SubHeadingBoxProps {
  textHeading: string;
}

function SubHeadingBox({ textHeading }: SubHeadingBoxProps) {
  return (
    <Heading
      as="h3"
      style={{ fontFamily: "Varela Round, sans-serif" }}
      color={"purple.500"}
      fontSize={21}
      py={4}
      mx={[3, 3, 7, 0]}
      mt={5}
      mb={1}
      tabIndex={4}
    >
      {/* <Icon as={AddIcon} color={"purple.500"} fontSize={19} mx={2} /> */}
      {textHeading}
    </Heading>
  );
}

export default SubHeadingBox;
