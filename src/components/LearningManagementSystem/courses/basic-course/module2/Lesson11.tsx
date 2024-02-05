import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import { Box } from "@chakra-ui/react";
import contentLesson from "./lesson11_data.json";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";

function Lesson2_10() {
  const text = ["יחידה 2, שיעור 10"];

  return (
    <Box>
      <SubHeadingBox textHeading="סיכום יחידת הלימוד" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_10;