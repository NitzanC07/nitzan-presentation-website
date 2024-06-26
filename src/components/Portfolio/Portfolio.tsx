import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import ULbox from "../LearningManagementSystem/LessonContent/ULbox";

function Portfolio() {
  return (
    <Flex
      bgColor={"gray.100"}
      w={"100%"}
      h={400}
      justifyContent={"center"}
      alignItems={"flex-start"}
      m={0}
      p={5}
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
          אנשים שסומכים עליי
        </Heading>
        <ULbox content={["נטלי ליה לביב - Happy Land", "שי-אל בורנשטיין", "איתן - כל אחד יכול", "תלמידים פרטיים"]} />
      </Box>
    </Flex>
  );
}

export default Portfolio;
