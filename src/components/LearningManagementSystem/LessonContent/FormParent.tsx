import React from "react";
import TestYourself from "./TestYourself";

function FormParent() {
  const test = [
    {
      question: "שאלה 1",
      options: ["אפשרות 1", "אפשרות 2", "אפשרות 3"],
      correctAnswer: "אפשרות 1",
      explainAnswer: "התשובה הנכונה היא, כי..."
    },
    {
      question: "שאלה 2",
      options: ["אפשרות 1", "אפשרות 2", "אפשרות 3", "אפשרות 4"],
      correctAnswer: "אפשרות 1",
      explainAnswer: "התשובה הנכונה היא, כי..."
    },
  ];

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

  const shuffledTest = test.map((sectionTest) => {
    return {
      question: sectionTest.question,
      options: shuffleAnswers(sectionTest.options),
      correctAnswer: sectionTest.correctAnswer,
      explainAnswer: sectionTest.explainAnswer
    };
  });

  return <TestYourself testQue={shuffledTest} />;
}

export default FormParent;
