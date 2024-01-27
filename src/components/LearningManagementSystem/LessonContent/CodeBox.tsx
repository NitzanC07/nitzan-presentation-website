import { Box, Code, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

interface LineCode {
        element: string;
        spaces: number;
        color: string;
}

interface CodeContentProps {
    codeLanguage: string;
    codeBlock: LineCode[]
}

function CodeBox({codeBlock, codeLanguage}: CodeContentProps) {
  
  return (
    <Grid
      templateColumns={"30px 1fr"}
      dir="ltr"
      w="90%"
      maxW={["200px", "500px", "700px"]}
      mx='auto'
      my={3}
      p={1}
      bgColor={"gray.700"}
      borderWidth={0}
    //   borderColor={"yellow.500"}
    //   borderStyle={"solid"}
    //   borderRadius={"3px"}
    >
      <GridItem colSpan={2} bgColor={"gray.600"} color={'white'} px={3} py={1}>
        {codeLanguage}
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
              {i+1}
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
    </Grid>
  );
}

export default CodeBox;
