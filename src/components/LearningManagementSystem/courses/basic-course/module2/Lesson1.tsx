import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson1Data from "./lesson1_data.json";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box } from "@chakra-ui/react";

function Lesson2_1() {
  return (
    <Box as="section" p={0} mx={0} my={0}>
      <SubHeadingBox textHeading="מה זה HTML?" />
      <ParagraphBox textContent={contentLesson1Data.text1} />
      <CodeBox codeBlock={contentLesson1Data.code1} codeLanguage="HTML" />
      <SubHeadingBox textHeading="המבנה האנטומי של מסמך HTML" />
      <ParagraphBox textContent={contentLesson1Data.text_anatomy} />
      <CodeBox codeBlock={contentLesson1Data.code2} codeLanguage="HTML" />
      <SubHeadingBox textHeading="תגיות <html></html>" />
      <ParagraphBox textContent={contentLesson1Data.text_html} />
      <SubHeadingBox textHeading="תגיות <head></head>" />
      <ParagraphBox textContent={contentLesson1Data.text_head} />
      <SubHeadingBox textHeading="תגיות <body></body>" />
      <ParagraphBox textContent={contentLesson1Data.text_body} />
    </Box>
  );
}

export default Lesson2_1;
