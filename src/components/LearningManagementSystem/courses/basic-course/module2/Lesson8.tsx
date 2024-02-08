import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box } from "@chakra-ui/react";
import contentLesson from "./lesson8_data.json";

function Lesson2_9() {
  const text = ["יחידה 2, שיעור 9"];

  return (
    <Box>
      <SubHeadingBox textHeading="מידע אודות העמוד (Meta Data)" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_9;
