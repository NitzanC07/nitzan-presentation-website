import NextLink from 'next/link';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ModuleCourse } from "@/types/coursesTypes";

interface NavLessonsListProps {
  courseData: ModuleCourse;
}

function NavLessonsList({ courseData }: NavLessonsListProps) {
  const courseContent = courseData.courseContent;
  const courseId = courseData.courseId;

  const navigateToLesson = () => {}

  return (
    <Accordion>
      {courseContent.map((moduleCourse: any) => (
        <AccordionItem key={moduleCourse.module}>
          <AccordionButton tabIndex={2} _hover={{bgColor: "rgba(255, 255, 255, 0.3)"}}>
            <Heading
              as="h3"
              fontSize={18}
              textAlign={"right"}
              fontFamily="var(--font-varela_round)"
              tabIndex={1}
              color={"white"}
            >
              {`יחידה ${moduleCourse.module}: ${moduleCourse.title}`}
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <List>
              {moduleCourse.lessons.map((lesson: any) => (
                <ListItem
                  key={lesson.lessonId}
                  tabIndex={-1}
                  mb={2}
                  p={2}
                  borderWidth={0}
                  borderRadius={4}
                  bgColor={"rgba(255, 255, 255, 0.1)"}
                  _hover={{bgColor: "rgba(255, 255, 255, 0.3)"}}
                >
                  <Link
                    as={NextLink}
                    href={`/courses/${courseId}/${lesson.lessonId}`}
                    color="white"
                    display={'block'}
                    tabIndex={1}
                  >
                    <b>שיעור {lesson.lessonId}:</b> {lesson.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default NavLessonsList;
