import fs from 'fs';
import path from 'path';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

interface NavLessonsListProps {
  selectedCourse: string;
}

function NavLessonsList(props: NavLessonsListProps) {
  
  const readSelectedCourseData = () => {
    const filePath = path.join(process.cwd(), 'data', `${props.selectedCourse}.json`);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const courseData = JSON.parse(fileData);
    return courseData;
  }

  const modulesSelectedCourse = readSelectedCourseData();    

  return (
    <Accordion>
      {modulesSelectedCourse.map((moduleCourse: any) => (
        <AccordionItem key={moduleCourse.module}>
          <AccordionButton>
            <Heading
              as="h3"
              fontSize={18}
              style={{ fontFamily: "Varela Round, sans-serif" }}
            >
              {`יחידה ${moduleCourse.module}: ${moduleCourse.title}`}
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <List>
              {moduleCourse.lessons.map((lesson: any) => (
                <ListItem key={lesson.lessonId}>
                    שיעור {lesson.lessonId}: {lesson.title}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
      <AccordionItem>params: {props.selectedCourse}</AccordionItem>
    </Accordion>
  );
}

export default NavLessonsList;
