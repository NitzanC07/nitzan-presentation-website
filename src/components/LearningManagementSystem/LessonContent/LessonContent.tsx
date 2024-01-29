"use client";
import dynamic from "next/dynamic";
import { ModuleCourse } from "@/app/courses/[...lms]/page";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading";

interface LessonContentProps {
  lessonId: string;
  courseData: ModuleCourse;
}

function LessonContent({ courseData, lessonId }: LessonContentProps) {
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

  const LessonComponent = dynamic(
    () =>
      import(
        `@/components/LearningManagementSystem/courses/${courseData.courseId}/module${moduleNumber}/Lesson${lessonNumber}`
      ),
    { ssr: false, loading: () => <Loading /> }
  );

  return (
    <Flex as='article' direction={"column"} w={["100%"]} maxW={"750px"} mx={'auto'}>
      <LessonComponent />
    </Flex>
  );
}

export default LessonContent;
