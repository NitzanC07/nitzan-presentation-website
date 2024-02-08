import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson from "./lesson4_data.json";
import { Box, Image } from "@chakra-ui/react";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import ULbox from "@/components/LearningManagementSystem/LessonContent/ULbox";

function Lesson2_5() {

  return (
    <Box as="section" m={0} p={0}>
      <SubHeadingBox textHeading="טבלאות (Tables)" />
      <ParagraphBox textContent={contentLesson.text_intro} />
      <ULbox content={contentLesson.text2} />
      <ParagraphBox textContent={contentLesson.text3} />
      <CodeBox
        codeBlock={contentLesson.code_table1}
        outputCode={contentLesson.outputCode1}
        codeLanguage="HTML"
      />
      <SubHeadingBox textHeading="מיזוג תאים - colspan & rowspan" />
      <ParagraphBox textContent={contentLesson.text4} />
      <ULbox content={contentLesson.text5} />
      <CodeBox
        codeBlock={contentLesson.code_table2}
        outputCode={contentLesson.outputCode1}
        codeLanguage="HTML"
      />

      <SubHeadingBox textHeading="תגיות סמנטיות בטבלה (Semantics Tags)" />
      <ParagraphBox textContent={contentLesson.text6} />
      <ULbox content={contentLesson.text7} />

      <Image
        src="\images\iconsAndSymbols\line.svg"
        alt="line"
        w={600}
        mx="auto"
        my={16}
      />

      <SubHeadingBox textHeading="זמן תרגול" />

    </Box>
  );
}

export default Lesson2_5;
