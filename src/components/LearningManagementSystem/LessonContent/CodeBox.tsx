"use client";
import { Button, Code, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface LineCode {
  element: string;
  spaces: number;
  color: string;
}

interface LineOutput {
  type: string;
  content: string | LineOutput[];
  style: {};
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
            style={{ fontFamily: "Varela Round, sans-serif" }}
            onClick={toggleShowOutput}
            tabIndex={1}
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

          {outputCode?.map((element, i) => {
            const { type, content, style } = element;
            const props = { key: i, style };
            if (Array.isArray(content)) {
              let nestedElements = [];
              for (let j = 0; j < content.length; j++) {
                const {
                  type: nestedType,
                  content: nestedContent,
                  style: nestedStyle,
                } = content[j];
                const nestedElement = React.createElement(
                  nestedType,
                  { key: j, ...nestedStyle },
                  nestedContent as React.ReactNode
                );
                nestedElements.push(nestedElement);
              }
              const parentElement = React.createElement(
                type,
                props,
                nestedElements
              );
              return parentElement;
            } else {
              return React.createElement(type, props, content);
            }
          })}
        </GridItem>
      )}
    </Grid>
  );
}

export default CodeBox;
