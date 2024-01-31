import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson5_data.json";
import { Box } from "@chakra-ui/react";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";

function Lesson2_5() {
  const text = ["יחידה 2, שיעור 5"];

  return (
    <Box as="section" m={0} p={0}>
      <SubHeadingBox textHeading="טפסים" />
      <ParagraphBox textContent={contentLesson.text_intro} />
    </Box>
  );
}

export default Lesson2_5;
