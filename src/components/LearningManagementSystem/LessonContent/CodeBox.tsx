"use client";
import {
  Box,
  Button,
  Code,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface LineCode {
  element: string;
  spaces: number;
  color: string;
}

interface LineOutput {
  type: string;
  content: string;
  style: {}
}

interface CodeContentProps {
  codeLanguage: string;
  codeBlock: LineCode[];
  outputCode?: LineOutput[];
}

function CodeBox({ codeBlock, outputCode, codeLanguage }: CodeContentProps) {
  const [showOutput, setShowOutput] = useState(false);

  const toggleShowOutput = () => {
    setShowOutput(!showOutput);
  };

  return (
    <Grid
      templateColumns={"30px 1fr"}
      dir="ltr"
      w="90%"
      maxW={["350px", "500px", "700px"]}
      mx="auto"
      my={3}
      p={1}
      bgColor={"gray.700"}
      borderWidth={0}
    >
      <GridItem colSpan={2} bgColor={"gray.600"} color={"white"}>
        <Flex justifyContent={"space-between"}>
          {codeLanguage}
          <Button
            px={1}
            py={0}
            h={5}
            m={1}
            colorScheme="teal"
            color="white"
            onClick={toggleShowOutput}
          >
            הצג פלט
          </Button>
        </Flex>
      </GridItem>

      <GridItem bgColor={"gray.600"}>
        {codeBlock.map((line, i) => (
          <Flex key={i}>
            <Code
              color={"white"}
              variant="subtle"
              bgColor={"gray.600"}
              p={0}
              m={0}
            >
              {i + 1}
            </Code>
          </Flex>
        ))}
      </GridItem>

      <GridItem flexDir={"column"} whiteSpace={"nowrap"} overflowX={"auto"}>
        {codeBlock.map((line, i) => (
          <Flex key={i}>
            <Code
              variant="subtle"
              bgColor={"gray.700"}
              px={2}
              py={0}
              m={0}
              color={line.color}
            >
              {`${"\u00A0".repeat(line.spaces)} ${line.element}`}
            </Code>
          </Flex>
        ))}
      </GridItem>
      {showOutput && (
        <GridItem colSpan={2} bgColor={"white"} dir="ltr">
          <Text bgColor={'gray.200'} px={2}>Output:</Text>
          {outputCode?.map((element, i) => {
            const { type, content, style } = element;
            const props = { key: i, style};
            return React.createElement(type, props, content);
          })}
        </GridItem>
      )}
    </Grid>
  );
}

export default CodeBox;
