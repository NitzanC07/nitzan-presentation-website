import { ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import { AddIcon, StarIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface ULboxProps {
  content: string[];
}
function ULbox({ content }: ULboxProps) {
  return (
    <UnorderedList  mx={8} my={5} p={0}>
      {content.map((item, i) => (
        <ListItem
          key={i}
          as="li"
          fontSize={18}
          textAlign={"justify"}
          letterSpacing={"0.03em"}
          pt={0}
          pb={4}
          mx={[3, 3, 7, 0]}
          m={0}
          color={"#0F0F0F"}
          tabIndex={1}
        >
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default ULbox;
