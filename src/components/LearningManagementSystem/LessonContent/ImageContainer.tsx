import { Box, Image, Card, Text } from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";

interface ImageContainerProps {
  srcUrl: string;
  altText: string;
  imageSubject?: string;
  descText: string;
  width: number[];
  backgroundColor?: string;
}

function ImageContainer({
  srcUrl,
  altText,
  imageSubject,
  descText,
  width,
  backgroundColor
}: ImageContainerProps) {
  return (
    <Card
      p={2}
      mx="auto"
      my={7}
      bgColor={backgroundColor ? backgroundColor : "#532E1C"}
      w={width}
      variant={"elevated"}
      boxShadow={0}
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
          width={'100%'}
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
