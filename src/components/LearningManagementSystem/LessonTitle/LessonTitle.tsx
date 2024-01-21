import { ModuleCourse } from "@/app/courses/[...lms]/page";
import { Flex, Heading, Text } from "@chakra-ui/react";

interface LessonTitleProps {
  courseData: ModuleCourse;
  lessonId: string;
}

function LessonTitle(props: LessonTitleProps) {
  const courseData = props.courseData;
  const courseTitle = courseData.courseName;
  const [moduleNumber, lessonNumber] = props.lessonId.toString().split(".");
  const currentModule = courseData.courseContent.find(
    (module) => module.module == moduleNumber
  );
  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.lessonId == props.lessonId
  );
  console.log(currentLesson);

  return (
    <Flex flexDir='column' p={0}>
      <Text 
        as='p'
        style={{ fontFamily: "Varela Round, sans-serif" }}
        fontSize={18}
      >יחידה {moduleNumber}</Text>
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
