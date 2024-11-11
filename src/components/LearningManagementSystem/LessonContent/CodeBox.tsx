"use client";
import {
  Button,
  Code,
  Flex,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { createElement, useState } from "react";

interface LineCode {
  element: string;
  spaces: number;
  color: string;
}

interface LineOutput {
  type: string;
  content: React.ReactNode | LineOutput[];
  style?: React.CSSProperties;
}

interface CodeContentProps {
  codeLanguage: string;
  codeBlock: LineCode[];
  outputCode?: LineOutput[] | undefined;
}

function CodeBox({ codeBlock, outputCode, codeLanguage }: CodeContentProps) {
  const [showOutput, setShowOutput] = useState(false);

  const toggleShowOutput = () => {
    setShowOutput(!showOutput);
  };

  const renderHTMLFromJSON = (
    outputCode?: LineOutput[]
  ): React.ReactElement[] => {
    return (
      (outputCode || []).map((element, index) => {
        return createHTMLElement(element, index);
      }) || []
    );
  };

  const createHTMLElement = (
    element: LineOutput,
    index: number
  ): React.ReactElement => {
    const { type, content, style } = element;

    const props = { key: index, style };

    if (Array.isArray(content)) {
      const nestedElements = content.map((nestedElement, nestedIndex) => {
        return createHTMLElement(nestedElement, nestedIndex);
      });

      return React.createElement(type, props, nestedElements);
    } else {
      return React.createElement(type, props, content);
    }
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
          <Text color={"gray.300"} fontWeight={"bold"} mx={2}>
            {codeLanguage}
          </Text>
          {outputCode && (
            <Button
              px={1}
              py={0}
              h={5}
              m={1}
              bgColor={"#C5A880"}
              _hover={{ bgColor: "#C5A88088" }}
              color="white"
              // style={{ fontFamily: "Varela Round, sans-serif" }}
              onClick={toggleShowOutput}
              tabIndex={1}
            >
              הצג פלט
            </Button>
          )}
        </Flex>
      </GridItem>

      <GridItem bgColor={"gray.600"}>
        {codeBlock.map((line, i) => (
          <Flex key={i}>
            <Code
              color={"gray.300"}
              variant="subtle"
              bgColor={"gray.600"}
              px={2}
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
              tabIndex={1}
            >
              {`${"\u00A0".repeat(line.spaces)} ${line.element}`}
            </Code>
          </Flex>
        ))}
      </GridItem>
      {showOutput && (
        <GridItem colSpan={2} bgColor={"white"} dir="ltr">
          <Text bgColor={"gray.200"} px={2}>
            Output:
          </Text>

          {renderHTMLFromJSON(outputCode)}
        </GridItem>
      )}
    </Grid>
  );
}

export default CodeBox;
