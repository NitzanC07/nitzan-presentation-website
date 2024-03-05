import React from "react";
import TestYourself from "./TestYourself";

interface TestYourselfProps {
  testYourself: {
    question: string;
    options: string[];
    correctAnswer: string;
    explainAnswer: string;
    codeBox?: {
      lines: { element: string; spaces: number; color: string }[];
      codeLang: string;
    };
  }[];
}
function FormParent({ testYourself }: TestYourselfProps) {
  const shuffleAnswers = (options: string[]) => {
    const copiedOptions = options.map((x) => x);
    for (let i = copiedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiedOptions[i], copiedOptions[j]] = [
        copiedOptions[j],
        copiedOptions[i],
      ];
    }
    return copiedOptions;
  };

  const shuffledTest = testYourself.map((sectionTest) => {
    return {
      question: sectionTest.question,
      options: shuffleAnswers(sectionTest.options),
      correctAnswer: sectionTest.correctAnswer,
      explainAnswer: sectionTest.explainAnswer,
      codeBox: sectionTest.codeBox || undefined,
    };
  });

  return <TestYourself testQue={shuffledTest} />;
}

export default FormParent;
