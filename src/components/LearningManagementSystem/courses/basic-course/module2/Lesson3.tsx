import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson3_data.json";
import { Box } from "@chakra-ui/react";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";

function Lesson2_3() {
  const text = ["יחידה 2, שיעור 3"];

  return (
    <Box as="article" p={0} m={0}>
      <SubHeadingBox textHeading="קישורים" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_3;
