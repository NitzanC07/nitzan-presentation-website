import { Box, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";

interface BibliographyBoxProps {
  resources: {
    title: string;
    url: string;
  }[];
}

function BibliographyBox({ resources }: BibliographyBoxProps) {
  return (
    <Box
      bgColor={"red.50"}
      borderWidth={2}
      borderColor={"red.400"}
      borderStyle={"dotted"}
      borderRadius={10}
      p={2}
      mt={20}
      mb={10}
      mx={3}
    >
      <Heading
        style={{ fontFamily: "Varela Round" }}
        fontSize={20}
        mt={2}
        mb={4}
        mx={9}
      >
        מקורות והרחבת הידע
      </Heading>
      <List>
        {resources.map((resource, i) => (
          <ListItem key={i} listStyleType={"initial"} mx={7}>
            <Link href={resource.url} isExternal>
              {resource.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BibliographyBox;
