import { ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import { AddIcon, StarIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface ULboxProps {
  content: string[];
}
function ULbox({ content }: ULboxProps) {
  return (
    <UnorderedList  mx={8} p={0}>
      {content.map((item, i) => (
        <ListItem
          key={i}
          as="li"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={18}
          py={0}
          mx={[3, 3, 7, 0]}
          m={0}
          tabIndex={4}
        >
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default ULbox;