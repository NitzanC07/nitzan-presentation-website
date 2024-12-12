"use client";
import { Box, Flex, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import { useState } from "react";
import SubHeadingBox from "../LearningManagementSystem/LessonContent/SubHeadingBox";

function About() {
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
        justifyContent={"space-between"}
        width={"100%"}
        // bgColor={"gray.200"}
      >
        <Box>
          <SubHeadingBox textHeading={"ניצן כהן"} />
          <ParagraphBox textContent={["על עצמי"]} />
        </Box>
        <Image
          src="/images/main-page/profile_picture.jpg"
          alt="Nitzan Cohen"
          borderRadius="full"
          borderWidth={2}
          borderColor={"gray.600"}
          borderStyle={"solid"}
          boxSize={["3xs", "2xs"]}
          m={0}
          ml={16}
        />
      </Flex>
      <ParagraphBox textContent={["אודות 1", "אודות 2", "אודות 3", "אודות 4", "אודות 5", "אודות 6", "אודות 7", "אודות 8", "אודות 9", "אודות 10"]} />
    </Flex>
  );
}

export default About;
