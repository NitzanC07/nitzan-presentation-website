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
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"100%"}
        mb={7}
      >
        <Image
          src="/images/main-page/profile_picture.jpg"
          alt="Nitzan Cohen"
          borderRadius="full"
          borderWidth={1}
          borderColor={"#133E87"}
          borderStyle={"solid"}
          boxSize={["100px", "150px", "200px"]}
          m={0}
          ml={[3, 16]}
        />
        <Box>
          <SubHeadingBox textHeading={"ניצן כהן"} />
          <ParagraphBox textContent={["על עצמי"]} />
        </Box>
      </Flex>
      <Box width={["100%", "90%", "80%", "70%", "60%"]} mx={'auto'}>
        <ParagraphBox textContent={["אודות 1", "אודות 2", "אודות 3", "אודות 4", "אודות 5", "אודות 6", "אודות 7", "אודות 8", "אודות 9", "אודות 10"]} />
      </Box>
    </Flex>
  );
}

export default About;
