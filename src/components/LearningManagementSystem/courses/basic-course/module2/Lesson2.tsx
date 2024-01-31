import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box, Image } from "@chakra-ui/react";
import contentLessonData from "./lesson2_data.json";
import ImageContainer from "@/components/LearningManagementSystem/LessonContent/ImageContainer";
import ULbox from "@/components/LearningManagementSystem/LessonContent/ULbox";
import Gallery from "@/components/LearningManagementSystem/LessonContent/Gallery";

function Lesson2_2() {
  return (
    <Box as="article" p={0} mx={0} my={0}>
      <SubHeadingBox textHeading="סוגי טקסטים" />
      <ParagraphBox textContent={contentLessonData.text_intro1} />

      <ImageContainer
        srcUrl="\images\lessonsContents\module2\lesson2\article_davar_6-9-1929.png"
        altText="עיתון דבר, 1929"
        descText='מתוך אתר "עתונות יהודית היסטורית". הספריה הלאומית ואוניברסיטת ת"א. עיתון "דבר", 6 בספטמבר 1929.'
        width={[300, 400]}
      />

      <ParagraphBox textContent={contentLessonData.text_intro2} />

      <SubHeadingBox textHeading="כותרות - Headings" />
      <ParagraphBox textContent={contentLessonData.text_headings} />
      <CodeBox
        codeBlock={contentLessonData.code_h}
        outputCode={contentLessonData.output_h}
        codeLanguage="HTML"
      />

      <SubHeadingBox textHeading="פסקה - Paragraph" />
      <ParagraphBox textContent={contentLessonData.text_paragraph} />
      <CodeBox
        codeBlock={contentLessonData.code_p}
        outputCode={contentLessonData.output_p}
        codeLanguage="HTML"
      />

      <SubHeadingBox textHeading="רשימות - Lists" />
      <ParagraphBox textContent={contentLessonData.text_list_ul} />
      <CodeBox
        codeBlock={contentLessonData.code_ul}
        outputCode={contentLessonData.output_ul}
        codeLanguage="HTML"
      />
      <ParagraphBox textContent={contentLessonData.text_list_ol} />
      <CodeBox
        codeBlock={contentLessonData.code_ol}
        outputCode={contentLessonData.output_ol}
        codeLanguage="HTML"
      />

      <Image
        src="\images\iconsAndSymbols\line.svg"
        alt="line"
        w={600}
        mx="auto"
        my={16}
      />

      <SubHeadingBox textHeading="זמן תרגול" />
      <ParagraphBox textContent={contentLessonData.practice_text1} />
      <ULbox content={contentLessonData.practice_text2} />
      <SubHeadingBox textHeading="תרגיל - חידוש כתבות ישנות" />
      <ParagraphBox textContent={contentLessonData.practice_text3} />
      <Gallery images={contentLessonData.practiceArticles} />
    </Box>
  );
}

export default Lesson2_2;
