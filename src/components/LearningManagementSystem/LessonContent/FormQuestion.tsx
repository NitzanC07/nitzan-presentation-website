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

interface FormQuestionProps {
  testQue: { question: string; options: string[]; correctAnswer: string }[];
}

function FormQuestion({ testQue }: FormQuestionProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  // console.log(test);

  const checkAnswers = (e: FormEvent) => {
    e.preventDefault();
    setShowAnswer(true);
  };

  const findRightAnswer = (arr: {}[]) => {};

  return (
    <form onSubmit={checkAnswers}>
      <FormControl>
        {testQue.map((testSection, i) => (
          <Box key={i} my={4}>
            <FormLabel style={{ fontFamily: "Varela Round, sans-serif" }}>
              {testSection.question}
            </FormLabel>
            <RadioGroup>
              <Flex flexDir="column" p={3}>
              {testSection.options.map((option, j) => {
                return (
                  <Radio key={j} value={option} py={1} colorScheme="orange">
                    <Text style={{ fontFamily: "Varela Round, sans-serif" }}>
                      {option}
                    </Text>
                  </Radio>
                );
              })}
                {showAnswer && (
                  <Text style={{ fontFamily: "Varela Round, sans-serif" }}>
                    התשובה הנכונה:{testSection.correctAnswer}
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

export default FormQuestion;
