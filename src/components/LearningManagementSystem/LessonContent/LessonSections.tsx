"use client";
import { ModuleCourse } from "@/app/courses/[...lms]/page";
import { useEffect, useState } from "react";
import ParagraphBox from "./ParagraphBox";
import SubHeadingBox from "./SubHeadingBox";
import ImageContainer from "./ImageContainer";
import FrameClause from "./FrameClause";
import CodeBox from "./CodeBox";
import Gallery from "./Gallery";
import ULbox from "./ULbox";
import { Box } from "@chakra-ui/react";

interface Section {
  sectionTitle?: string;
  textBlock?: string[];
  image?: { url: string; altText: string; descText: string; width: number[] };
  frameClause?: { frameTitle: string; paragraphs: string[] };
  codeBox?: {
    lines: { element: string; spaces: number; color: string }[];
    codeLang: string;
  };
  listBlock?: string[];
  imagesGallery?: { srcUrl: string; altText: string; descText: string }[];
}

interface LessonSectionsProps {
  lessonId: string;
  courseData: ModuleCourse;
}
function LessonSections({ courseData, lessonId }: LessonSectionsProps) {
  const [moduleNumber, setModuleNumber] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");

  const currentModule = courseData.courseContent.find(
    (module) => module.module == moduleNumber
  );

  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.lessonId == lessonId
  );

  useEffect(() => {
    setModuleNumber(lessonId.toString().split(".")[0]);
    setLessonNumber(lessonId.toString().split(".")[1]);
  }, [lessonId]);

  const lessonContent = currentLesson?.sections;
  console.log("Cuurent Lesson:", lessonContent);

  return (
    <Box as='article'w={"100%"} maxW={"750px"} mx={'auto'}>
      {currentLesson?.sections?.map((section: Section, i: number) => (
        <div key={i}>
          {section.sectionTitle && (
            <SubHeadingBox textHeading={section.sectionTitle} />
          )}
          {section.textBlock && (
            <ParagraphBox textContent={section.textBlock} />
          )}
          {section.listBlock && <ULbox content={section.listBlock} />}
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
            />
          )}
          {section.image && (
            <ImageContainer
              srcUrl={section.image.url}
              altText={section.image.altText}
              descText={section.image.descText}
              width={section.image.width}
            />
          )}
          {section.imagesGallery && <Gallery images={section.imagesGallery} />}
        </div>
      ))}
    </Box>
  );
}

export default LessonSections;
