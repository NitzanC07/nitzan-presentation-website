"use client";
import { ModuleCourse } from "@/app/courses/[...lms]/page";
import {
  Box,
  Button,
  Code,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface LessonContentProps {
  lessonId: string;
  courseData: ModuleCourse;
}

function LessonContent(props: LessonContentProps) {
  const courseData = props.courseData;
  const courseTitle = courseData.courseName;
  const [moduleNumber, lessonNumber] = props.lessonId.toString().split(".");
  const currentModule = courseData.courseContent.find(
    (module) => module.module == moduleNumber
  );
  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.lessonId == props.lessonId
  );

  // const nameInputRef = useRef<HTMLInputElement>(null);

  // const sampleCode = [
  //   { element: "<!DOCTYPE html>", spaces: 0, color: "yellow.300" },
  //   { element: "<html>", spaces: 0, color: "red.300" },
  //   { element: "<head>", spaces: 4, color: "blue.300" },
  //   { element: '<meta charset="UTF-8" />', spaces: 8, color: "white" },
  //   {
  //     element:
  //       '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  //     spaces: 8,
  //     color: "white",
  //   },
  //   { element: "<title>Document</title>", spaces: 8, color: "white" },
  //   { element: "<style />", spaces: 8, color: "white" },
  //   { element: "</head>", spaces: 4, color: "blue.300" },
  //   { element: "<body>", spaces: 4, color: "green.300" },
  //   { element: "", spaces: 4, color: "white" },
  //   { element: "</body>", spaces: 4, color: "green.300" },
  //   { element: "</html>", spaces: 0, color: "red.300" },
  // ];

  // function handleInput() {
  //   console.log(nameInputRef.current?.value);
  // }
  // function handleApi(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const enteredName = nameInputRef.current?.value;
  //   console.log(enteredName);
  // }

  return (
    <Flex direction={"column"} w={["100%"]} maxW={"700px"} mx={"auto"}>
      <Text
        as="p"
        style={{ fontFamily: "Varela Round, sans-serif" }}
        fontSize={18}
      >
        {currentLesson?.content}
      </Text>
    </Flex>
  );
}

export default LessonContent;

{
  /* <Heading
          as="h2"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={23}
        >
          שיעור
        </Heading>
        <Text style={{ fontFamily: "Varela Round, sans-serif" }} fontSize={20}>
          תוכן
        </Text>

        <form onSubmit={handleApi}>
          <FormControl>
            <FormLabel>שם פרטי</FormLabel>
            <Input
              placeholder="שם פרטי"
              ref={nameInputRef}
              onChange={handleInput}
            />
            <Select placeholder="Select youe choice..." px={10}>
              <option>HTML</option>
              <option>CSS</option>
              <option>JS</option>
            </Select>
            <Button type="submit">Click me to check API</Button>
          </FormControl>
        </form>

        <Stack
          dir="ltr"
          direction={"column"}
          w="90%"
          maxW={["200px", "500px", "700px"]}
          mx="auto"
          borderWidth={3}
          borderColor={"blue.300"}
          borderStyle={"dotted"}
          bgColor={"black"}
          whiteSpace={"nowrap"}
          overflowX={"auto"}
        >
          {sampleCode.map((line, i) => (
            <Code
              key={i}
              variant="subtle"
              bgColor={"transparent"}
              p={0}
              m={0}
              color={line.color}
            >
              {`${i + 1} ${"\u00A0".repeat(line.spaces)} ${line.element}`}
            </Code>
          ))}
        </Stack> */
}
