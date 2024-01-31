import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import { Box } from "@chakra-ui/react";
import contentLesson from "./lesson8_data.json";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";

function Lesson2_8() {
  const text = ["יחידה 2, שיעור 8"];

  return (
    <Box as="article" m={0} p={0}>
      <SubHeadingBox textHeading="Meta Data" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_8;
