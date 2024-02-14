"use client";
import { ModuleCourse } from "@/types/coursesTypes";
import { useEffect, useState } from "react";
import ParagraphBox from "./ParagraphBox";
import SubHeadingBox from "./SubHeadingBox";
import ImageContainer from "./ImageContainer";
import FrameClause from "./FrameClause";
import CodeBox from "./CodeBox";
import Gallery from "./Gallery";
import ULbox from "./ULbox";
import { Box } from "@chakra-ui/react";
import BigButton from "./BigButton";
import DecorativeLine from "./DecorativeLine";

interface LessonSectionsProps {
  lessonId: string;
  courseData: ModuleCourse;
}
function LessonSections({ courseData, lessonId }: LessonSectionsProps) {
  const [moduleNumber, setModuleNumber] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");

  useEffect(() => {
    setModuleNumber(lessonId.toString().split(".")[0]);
    setLessonNumber(lessonId.toString().split(".")[1]);
  }, [lessonId]);

  const currentModule = courseData.courseContent.find(
    (module) => module.module == moduleNumber
  );

  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.lessonId == lessonId
  );

  return (
    <Box as="article" w={"100%"} maxW={"750px"} mx={"auto"}>
      {currentLesson?.sections?.map((section, i) => (
        <div key={i}>
          {section.sectionTitle && (
            <SubHeadingBox textHeading={section.sectionTitle} />
          )}
          {section.textBlock && (
            <ParagraphBox textContent={section.textBlock} />
          )}
          {section.listBlock && <ULbox content={section.listBlock} />}
          {section.BigButton && (
            <BigButton
              urlLink={section.BigButton.urlLink}
              text={section.BigButton.text}
            />
          )}
          {section.frameClause && (
            <FrameClause
              textContent={section.frameClause.paragraphs}
              title={section.frameClause.frameTitle}
            />
          )}
          {section.codeBox && (
            <CodeBox
              codeBlock={section.codeBox.lines}
              codeLanguage={section.codeBox.codeLang}
              outputCode={section.codeBox.outputCode}
            />
          )}
          {section.image && (
            <ImageContainer
              srcUrl={section.image.url}
              altText={section.image.altText}
              imageSubject={section.image.imageSubject}
              descText={section.image.descText}
              width={section.image.width}
            />
          )}
          {section.imagesGallery && <Gallery images={section.imagesGallery} />}
          {section.decorativeLine && <DecorativeLine />}
        </div>
      ))}
    </Box>
  );
}

export default LessonSections;
