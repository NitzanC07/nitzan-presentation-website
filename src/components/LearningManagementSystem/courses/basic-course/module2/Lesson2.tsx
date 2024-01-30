import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import contentLessonData from './lesson2_data.json';

function Lesson2_2() {

  const text = ["יחידה 2, שיעור 2"]

  const sampleCode2 = [
    {element: "<body>", spaces: 0, color: "white"},
    {element: "<h1>Header 1</h1>", spaces: 2, color: "yellow.300"},
    {element: "<h2>Header 2</h2>", spaces: 2, color: "yellow.300"},
    {element: "<h3>Header 3</h3>", spaces: 2, color: "yellow.300"},
    {element: "<h4>Header 4</h4>", spaces: 2, color: "yellow.300"},
    {element: "<h5>Header 5</h5>", spaces: 2, color: "yellow.300"},
    {element: "<h6>Header 6</h6>", spaces: 2, color: "yellow.300"},
    {element: "<h7>Header 7</h7>", spaces: 2, color: "yellow.300"},
    {element: "", spaces: 2, color: "white"},
    {element: "<p>Paragraph</p>", spaces: 2, color: "purple.300"},
    {element: "</body>", spaces: 0, color: "white"}
  ]

  return (
    <Box as="section" p={0} mx={0} my={0}>
      <SubHeadingBox textHeading="סוגי טקסטים" />
      <ParagraphBox textContent={contentLessonData.text_intro1} />
      
      <Card p={2} mx='auto' my={7} w={[300, 400]} bgColor={'gray.100'}>
        <Image src="\images\lessonsContents\davar_1929_09_06.png" alt="עיתון דבר, 1929" w={'100%'} m={0} />
        <Text as='p' fontSize={11} pt={2}>{"מתוך אתר \"עתונות יהודית היסטורית\". הספריה הלאומית ואוניברסיטת ת\"א. 6 בספטמבר 1929."}</Text>
      </Card>
      <ParagraphBox textContent={contentLessonData.text_intro2} />
      <SubHeadingBox textHeading="כותרות - Headings" />
      <ParagraphBox textContent={contentLessonData.text_headings} />
      <CodeBox codeBlock={contentLessonData.code_h} outputCode={contentLessonData.output_h} codeLanguage="HTML" />
      <SubHeadingBox textHeading="פסקה - Paragraph" />
      <ParagraphBox textContent={contentLessonData.text_paragraph} />
      <CodeBox codeBlock={contentLessonData.code_p} outputCode={contentLessonData.output_p} codeLanguage="HTML" />
      <SubHeadingBox textHeading="רשימות - Lists" />
      <ParagraphBox textContent={contentLessonData.text_list_ul} />
      <CodeBox codeBlock={contentLessonData.code_ul} outputCode={contentLessonData.output_ul} codeLanguage="HTML" />
      <ParagraphBox textContent={contentLessonData.text_list_ol} />
      <CodeBox codeBlock={contentLessonData.code_ol} outputCode={contentLessonData.output_ol} codeLanguage="HTML" />
    </Box>
  );
}

export default Lesson2_2;
