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
import { ModuleCourse } from "@/app/courses/[...lms]/page";

interface NavLessonsListProps {
  courseData: ModuleCourse;
}

function NavLessonsList({ courseData }: NavLessonsListProps) {
  const courseContent = courseData.courseContent;
  const courseId = courseData.courseId;

  return (
    <Accordion>
      {courseContent.map((moduleCourse: any) => (
        <AccordionItem key={moduleCourse.module}>
          <AccordionButton tabIndex={2}>
            <Heading
              as="h3"
              fontSize={18}
              textAlign={"right"}
              style={{ fontFamily: "Varela Round, sans-serif" }}
              tabIndex={-1}
              color={'white'}
            >
              {`יחידה ${moduleCourse.module}: ${moduleCourse.title}`}
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <List>
              {moduleCourse.lessons.map((lesson: any) => (
                <ListItem key={lesson.lessonId} tabIndex={-1} mb={3} style={{'fontFamily': 'Varela Round, sans-serif'}}>
                  <Link href={`/courses/${courseId}/${lesson.lessonId}`} color='white' tabIndex={2}>
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
