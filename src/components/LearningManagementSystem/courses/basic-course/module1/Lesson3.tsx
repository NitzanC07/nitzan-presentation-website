import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson3_data.json";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box, Button, Flex, Link } from "@chakra-ui/react";

function Lesson2_4() {
  const text = ["יחידה 2, שיעור 4"];

  return (
    <Box as="article" m={0} p={0}>
      <SubHeadingBox textHeading="סביבות עבודה ועורכי קוד" />
      <ParagraphBox textContent={contentLesson.textIntro} />
      <SubHeadingBox textHeading="Virtual Studio Code" />
      <ParagraphBox textContent={contentLesson.text2} />
      <Flex w={'100%'} justifyContent={'center'}>
        <Link
          href="https://code.visualstudio.com/"
          target="_blank"
          mb={5}
        >
          <Button
            style={{ fontFamily: "Varela Round, sans-serif" }}
            colorScheme="yellow"
          >
            Virtual Studio Code - Code Editor
          </Button>
        </Link>
      </Flex>
      <ParagraphBox textContent={contentLesson.text3} />
      <Flex w={'100%'} justifyContent={'center'}>
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          target="_blank"
          mb={5}
        >
          <Button
            style={{ fontFamily: "Varela Round, sans-serif" }}
            colorScheme="yellow"
          >
            Live Server Extention
          </Button>
        </Link>
      </Flex>
      <ParagraphBox textContent={contentLesson.text4} />
    </Box>
  );
}

export default Lesson2_4;
