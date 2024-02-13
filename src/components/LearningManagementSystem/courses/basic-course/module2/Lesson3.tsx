import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson3_data.json";
import { Box, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import ULbox from "@/components/LearningManagementSystem/LessonContent/ULbox";
import FrameClause from "@/components/LearningManagementSystem/LessonContent/FrameClause";

function Lesson2_3() {
  const text = ["יחידה 2, שיעור 3"];

  return (
    <Box as="article" p={0} m={0}>
      {/** Section 1 */}
      <SubHeadingBox textHeading="חיבורים בין עולמות" />
      <ParagraphBox textContent={contentLesson.text_intro1} />
      <FrameClause textContent={contentLesson.game} title="משחק - מירוץ ויקיפדיה" />

      {/** Section 2 */}
      <ParagraphBox textContent={contentLesson.text_intro2} />
      <CodeBox codeBlock={contentLesson.code1} codeLanguage="HTML" />

      {/** Section 3 */}
      <ParagraphBox textContent={contentLesson.text_intro3} />
      <CodeBox codeBlock={contentLesson.code2} outputCode={contentLesson.output2} codeLanguage="HTML" />

      {/** Section 4 */}
      <ParagraphBox textContent={contentLesson.text_attributes} />
      <ULbox content={contentLesson.textList1} />
      <CodeBox codeBlock={contentLesson.code3} outputCode={contentLesson.output3} codeLanguage="HTML" />
      
      {/** Section 5 */}
      <SubHeadingBox textHeading="קישורים במרחב" />
      <ParagraphBox textContent={contentLesson.text_relations} />
      <CodeBox codeBlock={contentLesson.code4} outputCode={contentLesson.output4} codeLanguage="HTML" />    
      <Image
        src="\images\iconsAndSymbols\line.svg"
        alt="line"
        w={600}
        mx="auto"
        my={16}
      />

        {/** Section 6 */}
      <SubHeadingBox textHeading="זמן תרגול" />
      <ParagraphBox textContent={contentLesson.text_conclusion1} />
      <FrameClause textContent={contentLesson.text_frame} />
      
        {/** Section 7 */}
      <ParagraphBox textContent={contentLesson.text_conclusion2} />

    </Box>
  );
}

export default Lesson2_3;
