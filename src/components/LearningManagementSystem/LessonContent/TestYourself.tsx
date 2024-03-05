import React, { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";

interface TestYourselfProps {
  testQue: { question: string; options: string[]; correctAnswer: string ; explainAnswer: string; }[];
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
      <FormControl>
        {testQue.map((testSection, i) => (
          <Box key={i} my={4}>
            <FormLabel style={{ fontFamily: "Varela Round, sans-serif" }}>
              {testSection.question}
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
                      value={option}
                      py={1}
                      colorScheme="orange"
                      isDisabled={showAnswer ? true : false}
                    >
                      <Text style={{ fontFamily: "Varela Round, sans-serif" }}>
                        {option}
                      </Text>
                    </Radio>
                  );
                })}
                {showAnswer && (
                  <Text
                    style={{ fontFamily: "Varela Round, sans-serif" }}
                    bgColor={`${isCorrect[i] ? "green" : "red"}`}
                    color={`yellow.200`}
                  >
                    הסבר לשאלה: {testSection.explainAnswer}
                  </Text>
                )}
              </Flex>
            </RadioGroup>
          </Box>
        ))}

        <Button type="submit">בדיקה</Button>
      </FormControl>
    </form>
  );
}

export default TestYourself;
