import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson4_data.json";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box } from "@chakra-ui/react";

function Lesson2_4() {
  const text = ["יחידה 2, שיעור 4"];

  return (
    <Box as="article" m={0} p={0}>
      <SubHeadingBox textHeading="יצירת טבלה" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_4;
