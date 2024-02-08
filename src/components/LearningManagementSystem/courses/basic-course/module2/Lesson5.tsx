import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box } from "@chakra-ui/react";
import contentLesson from "./lesson5_data.json";

function Lesson2_6() {
  const text = ["יחידה 2, שיעור 6"];

  return (
    <Box as="section" m={0} p={0}>
      <SubHeadingBox textHeading="טופס (Forms)" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_6;
