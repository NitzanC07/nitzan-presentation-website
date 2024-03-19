import { Card, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ImageContainerProps {
  srcUrl: string;
  altText: string;
  imageSubject?: string;
  descText: string;
  width: number[];
}

function ImageContainer({
  srcUrl,
  altText,
  imageSubject,
  descText,
  width,
}: ImageContainerProps) {
  return (
    <Card
      p={2}
      mx="auto"
      my={7}
      bgColor={"#532E1C"}
      w={width}
      variant={"elevated"}
      // boxShadow={"revert"}
    >
      {imageSubject && (
        <Text
          style={{ fontFamily: "Varela Round" }}
          fontSize={15}
          color={'white'}
          px={2}
          pb={4}
        >
          {imageSubject}
        </Text>
      )}
      <Image
        src={srcUrl}
        alt={altText}
        w={"100%"}
        m={0}
        tabIndex={1}
        title={altText}
      />
      <Text as="p" fontSize={11} color={'white'} pt={2} tabIndex={1}>
        {descText}
      </Text>
    </Card>
  );
}

export default ImageContainer;
