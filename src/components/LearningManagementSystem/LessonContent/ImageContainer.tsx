import { Card, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ImageContainerProps {
  srcUrl: string;
  altText: string;
  descText: string;
  width: number[];
}

function ImageContainer({ srcUrl, altText, descText, width }: ImageContainerProps) {
  return (
    <Card p={2} mx="auto" my={7} bgColor={"gray.100"} w={width}>
      <Image src={srcUrl} alt={altText} w={"100%"} m={0} />
      <Text as="p" fontSize={11} pt={2}>
        {descText}
      </Text>
    </Card>
  );
}

export default ImageContainer;
