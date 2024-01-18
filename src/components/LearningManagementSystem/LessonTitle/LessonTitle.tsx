import { Heading } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

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

export function getStaticProps() {
  
}