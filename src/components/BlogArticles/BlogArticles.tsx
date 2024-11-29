import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";

function BlogArticles() {
  return (
    <Flex
      w={"100%"}
      flexDirection={["column", "column", "row"]}
      justifyContent={["flex-start", "flex-start", "center"]}
      alignItems={["center", "center", "flex-start"]}
      m={0}
      p={5}
      bgColor={"gray.200"}
      blur={'70%'}
    >
      <Box width={[280, 450, 600]} mt={[0, "40px"]}>
      <Heading
          fontFamily="var(--font-varela_round)"
          color={"#815B5B"}
          fontSize={24}
          py={4}
          mx={[3, 3, 7, 0]}
          mt={5}
          mb={1}
          tabIndex={1}
        >
          מאמרים
        </Heading>
          <Link as={NextLink} href="/blog">מעבר לקריאת מאמרים בבלוג</Link>
        <ParagraphBox textContent={["מאמרים"]} />
      </Box>
    </Flex>
  );
}

export default BlogArticles;
