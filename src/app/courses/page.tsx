"use client";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";

function CoursesPage() {
  function chooseCourse() {
    fetch("/api/courses/basic-course")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box mt="70px">
        <Heading
          as="h2"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={23}
        >
          קורסים
        </Heading>
        <Link href="/courses/learning-management-system" onClick={chooseCourse}>קורס בסיסי</Link>
        <Link href="/courses/learning-management-system">קורס מתקדם</Link>
        <Link href="/courses/learning-management-system">
          סדנת כתיבה יצירתית
        </Link>
      </Box>
    </Flex>
  );
}

export default CoursesPage;
