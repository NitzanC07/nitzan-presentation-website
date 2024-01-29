import CodeBox from "@/components/LearningManagementSystem/LessonContent/CodeBox";
import ParagraphBox from "@/components/LearningManagementSystem/LessonContent/ParagraphBox";
import contentLesson1Data from './lesson1_data.json';
import ULbox from "@/components/LearningManagementSystem/LessonContent/ULbox";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";


function Lesson2_1() { 

  return (
    <>
      <ParagraphBox textContent={contentLesson1Data.text1} />
      <CodeBox codeBlock={contentLesson1Data.code} codeLanguage="HTML" />
      <SubHeadingBox textHeading="תגיות <html></html>" />
      <ParagraphBox textContent={contentLesson1Data.text2} />
      <ULbox content={contentLesson1Data.ulText} />
      <SubHeadingBox textHeading="תגיות <head></head>" />
      <ParagraphBox textContent={contentLesson1Data.text3} />
      <SubHeadingBox textHeading="תגיות <body></body>" />
      <ParagraphBox textContent={contentLesson1Data.text4} />
    </>
  );
}

export default Lesson2_1;
