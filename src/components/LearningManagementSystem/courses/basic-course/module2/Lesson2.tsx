import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import { Text } from "@chakra-ui/react";

function Lesson2_2() {

  const text = ["יחידה 2, שיעור 2"]

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
      <ParagraphBox textContent={text} />
      <CodeBox codeBlock={sampleCode2} codeLanguage="HTML" />
    </>
  );
}

export default Lesson2_2;
