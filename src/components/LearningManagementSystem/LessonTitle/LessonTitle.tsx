import { Heading } from "@chakra-ui/react";

function LessonTitle() {
  return (
    <Heading
      as="h2"
      style={{ fontFamily: "Varela Round, sans-serif" }}
      fontSize={23}
    >
      כותרת השיעור
    </Heading>
  );
}

export default LessonTitle;
