"use client";
import { ModuleCourse } from "@/app/courses/[...lms]/page";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface LessonTitleProps {
  courseData: ModuleCourse;
  lessonId: string;
}

function LessonTitle({ courseData, lessonId }: LessonTitleProps) {
  // const courseData = props.courseData;
  const courseTitle = courseData.courseName;
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

  return (
    <Flex flexDir="column" p={0}>
      <Text
        as="p"
        style={{ fontFamily: "Varela Round, sans-serif" }}
        fontSize={18}
      >
        קורס: {courseTitle} | יחידת לימוד {moduleNumber}
      </Text>
      <Heading
        as="h2"
        style={{ fontFamily: "Varela Round, sans-serif" }}
        fontSize={23}
      >
        שיעור {lessonNumber} - {currentLesson?.title}
      </Heading>
    </Flex>
  );
}

export default LessonTitle;
