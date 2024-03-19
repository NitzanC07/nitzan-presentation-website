import React, { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import CodeBox from "./CodeBox";

interface TestYourselfProps {
  testQue: {
    question: string;
    options: string[];
    correctAnswer: string;
    explainAnswer: string;
    codeBox?:
      | {
          lines: { element: string; spaces: number; color: string }[];
          outputCode?: { type: string; content: string; style: {} }[];
          codeLang: string;
        }
      | undefined;
  }[];
}

function TestYourself({ testQue }: TestYourselfProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [choosenOptions, setChoosenOptions] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean[]>([]);

  // console.log(test);

  const checkAnswers = (e: FormEvent) => {
    e.preventDefault();
    setIsCorrect(
      testQue.map((sectionTest, i) => {
        return choosenOptions[i] === sectionTest.correctAnswer;
      })
    );

    setShowAnswer(true);
  };

  return (
    <form onSubmit={checkAnswers}>
      <FormControl px={3}>
        {testQue.map((testSection, i) => (
          <Box key={i} my={4}>
            <Heading
              style={{ fontFamily: "Varela Round, sans-serif" }}
              tabIndex={1}
              fontSize={18}
              mb={4}
            >
              שאלה {`${i + 1}`}
            </Heading>
            <FormLabel
              style={{ fontFamily: "Varela Round, sans-serif" }}
              fontSize={16}
              tabIndex={1}
            >
              {testSection.question}
              {testSection.codeBox && (
                <CodeBox
                  codeLanguage={testSection.codeBox.codeLang}
                  codeBlock={testSection.codeBox.lines}
                />
              )}
            </FormLabel>
            <RadioGroup
              onChange={(value) => {
                setChoosenOptions((prevOptions) => {
                  const newOptions = [...prevOptions];
                  newOptions[i] = value;
                  return newOptions;
                });
              }}
              value={choosenOptions[i] || ""}
              border={0}
              borderBottom={"solid"}
              borderWidth={1}
            >
              <Flex flexDir="column" p={3}>
                {testSection.options.map((option, j) => {
                  return (
                    <Radio
                      key={j}
                      tabIndex={1}
                      value={option}
                      py={2}
                      px={5}
                      colorScheme="orange"
                      isDisabled={showAnswer ? true : false}
                      bgColor={"#C5A880"}
                      _checked={{ bgColor: "#532E1C" }}
                    >
                      <Text
                        style={{ fontFamily: "Varela Round, sans-serif" }}
                        fontSize={16}
                        tabIndex={1}
                      >
                        {option}
                      </Text>
                    </Radio>
                  );
                })}
                {showAnswer && (
                  <Box
                    my={3}
                    p={2}
                    bgColor={"white"}
                    borderRadius={5}
                    borderColor={`${isCorrect[i] ? "green.400" : "red.400"}`}
                    borderWidth={2}
                  >
                    <Heading
                      fontSize={20}
                      tabIndex={1}
                      style={{ fontFamily: "Varela Round, sans-serif" }}
                      color={`${isCorrect[i] ? "green.400" : "red.400"}`}
                    >
                      {isCorrect[i] ? "נכון מאוד!" : "טעות"}
                    </Heading>
                    <Text
                      fontSize={16}
                      style={{ fontFamily: "Varela Round, sans-serif" }}
                      color={`black`}
                      tabIndex={1}
                    >
                      {testSection.explainAnswer}
                    </Text>
                  </Box>
                )}
              </Flex>
            </RadioGroup>
          </Box>
        ))}

        <Flex justifyContent={"flex-end"}>
          <Button
            type="submit"
            colorScheme="orange"
            style={{ fontFamily: "Varela Round, sans-serif" }}
            bgColor={"#C5A880"}
            _hover={{bgColor: "#C5A880aa"}}
            color={"white"}
            shadow={"3px 3px 5px #888"}
            tabIndex={1}
          >
            בדיקה
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}

export default TestYourself;
