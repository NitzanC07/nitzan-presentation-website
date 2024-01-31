import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box } from "@chakra-ui/react";
import contentLesson from "./lesson7_data.json";

function Lesson2_7() {
  const text = ["יחידה 2, שיעור 7"];

  return (
    <Box as="section" m={0} p={0}>
      <SubHeadingBox textHeading="סמנטיקה ומבנה העמוד" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_7;
