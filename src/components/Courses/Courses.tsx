import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "../LearningManagementSystem/LessonContent/SubHeadingBox";
import content from "./content.json";

function Courses() {
  return (
    <Flex
      w={"100%"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      m={0}
      p={0}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"100%"}
        mb={7}
      >
        <SubHeadingBox textHeading={content.title} />
      </Flex>
      <Box width={["100%", "90%", "80%", "70%", "60%"]} mx={"auto"}>
        <ParagraphBox textContent={content.courses} />
        <Link as={NextLink} href="/courses">קורסים</Link>
      </Box>
    </Flex>
  );
}

export default Courses;
