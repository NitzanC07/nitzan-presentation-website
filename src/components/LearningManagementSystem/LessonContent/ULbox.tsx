import { ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import { AddIcon, StarIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface ULboxProps {
  content: string[];
}
function ULbox({ content }: ULboxProps) {
  return (
    <UnorderedList  mt={0} mb={4} p={0}>
      {content.map((item, i) => (
        <ListItem
          key={i}
          as="li"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={18}
          py={0}
          mx={[3, 3, 7, 0]}
          mt={2}
          mb={4}
          
          tabIndex={4}
        >
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default ULbox;
