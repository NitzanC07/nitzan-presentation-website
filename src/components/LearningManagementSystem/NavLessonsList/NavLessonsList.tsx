import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

function NavLessonsList() {

  const modulesCourse = [
    {
      module: 1,
      title: "הקדמה",
      lessons: [
        { id: 1, title: "אודות הקורס" },
        { id: 2, title: "מה זה אינטרנט?" },
        { id: 3, title: "מה זה אינטרנט?" },
      ],
    },
    {
      module: 2,
      title: "HTML",
      lessons: [
        { id: 1, title: "מה זה HTML, ומה החשיבות שלו בבניית אתרי אינטרנט?" },
        { id: 2, title: "מבנה עמוד HTML בסיסי." },
        { id: 3, title: "מבנה עמוד HTML בסיסי." },
        { id: 4, title: "מבנה עמוד HTML בסיסי." },
      ],
    },
    {
      module: 3,
      title: "CSS",
      lessons: [
        { id: 1, title: "מה זה CSS, ועל מה הוא אחראי בבניית אתרי אינטרנט?" },
        { id: 2, title: "הגדרות כלליות של CSS." },
        { id: 3, title: "מאפייני עיצוב בסיסיים" },
      ],
    },
  ];

  return (
    <Accordion>
      {modulesCourse.map((moduleCourse) => (
        <AccordionItem key={moduleCourse.module}>
          <AccordionButton>
            <Heading
              as="h3"
              fontSize={20}
              style={{ fontFamily: "Varela Round, sans-serif" }}
            >
              {`יחידה ${moduleCourse.module}: ${moduleCourse.title}`}
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <List>
              {moduleCourse.lessons.map((lesson) => (
                <ListItem key={lesson.id}>
                    שיעור {lesson.id}: {lesson.title}
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
