import fs from "fs";
import path from "path";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ModuleCourse } from "@/app/courses/[lms]/page";

interface NavLessonsListProps {
  courseData: ModuleCourse[];
}

function NavLessonsList({courseData}: NavLessonsListProps) {  
    
  return (
    <Accordion>
      {courseData.map((moduleCourse: any) => (
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
      
    </Accordion>
  );
}

export default NavLessonsList;

