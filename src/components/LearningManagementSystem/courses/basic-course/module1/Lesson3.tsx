import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson3_data.json";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import BigButton from "@/components/LearningManagementSystem/LessonContent/BigButton";

function Lesson2_4() {
  const text = ["יחידה 2, שיעור 4"];

  return (
    <Box as="article" m={0} p={0}>
      <SubHeadingBox textHeading="סביבות עבודה ועורכי קוד" />
      <ParagraphBox textContent={contentLesson.textIntro} />
      
      <SubHeadingBox textHeading="Virtual Studio Code" />
      <ParagraphBox textContent={contentLesson.text2} />
      <BigButton urlLink="https://code.visualstudio.com/" text="Virtual Studio Code - Code Editor"/>

      <ParagraphBox textContent={contentLesson.text3} />
      <BigButton urlLink="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" text="Live Server Extention" />
      
      <ParagraphBox textContent={contentLesson.text4} />
    </Box>
  );
}

export default Lesson2_4;
