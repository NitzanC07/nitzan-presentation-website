import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import { Box, Code, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

function Lesson2_1() {

  const sampleCode = [
    { element: "<!DOCTYPE html>", spaces: 0, color: "yellow.300" },
    { element: "<html>", spaces: 0, color: "red.300" },
    { element: "<head>", spaces: 2, color: "blue.300" },
    { element: '<meta charset="UTF-8" />', spaces: 4, color: "white" },
    {
      element:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      spaces: 4,
      color: "white",
    },
    { element: "<title>Document</title>", spaces: 4, color: "white" },
    { element: "<style></style>", spaces: 4, color: "white" },
    { element: "</head>", spaces: 2, color: "blue.300" },
    { element: "<body>", spaces: 2, color: "green.300" },
    { element: "", spaces: 2, color: "white" },
    { element: "</body>", spaces: 2, color: "green.300" },
    { element: "</html>", spaces: 0, color: "red.300" },
  ];

  const sampleCode2 = [
    {element: "<body>", spaces: 0, color: "white"},
    {element: "<h1>Header 1</h1>", spaces: 2, color: "yellow.300"},
    {element: "<h2>Header 2</h2>", spaces: 2, color: "yellow.300"},
    {element: "<h3>Header 3</h3>", spaces: 2, color: "yellow.300"},
    {element: "<h4>Header 4</h4>", spaces: 2, color: "yellow.300"},
    {element: "<h5>Header 5</h5>", spaces: 2, color: "yellow.300"},
    {element: "<h6>Header 6</h6>", spaces: 2, color: "yellow.300"},
    {element: "<h7>Header 7</h7>", spaces: 2, color: "yellow.300"},
    {element: "</body>", spaces: 0, color: "white"}
  ]

  return (
    <>
      <ParagraphBox textContent={["יחידה 2, שיעור 1"]} />
      <CodeBox codeBlock={sampleCode} codeLanguage="HTML" />
      <ParagraphBox textContent={["יחידה 2, שיעור 1"]} />
      <CodeBox codeBlock={sampleCode2} codeLanguage="HTML" />
      <ParagraphBox textContent={["יחידה 2, שיעור 1"]} />
    </>
  );
}

export default Lesson2_1;
