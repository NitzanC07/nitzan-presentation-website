import { Box, Flex, Image } from "@chakra-ui/react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import SubHeadingBox from "../LearningManagementSystem/LessonContent/SubHeadingBox";
import content from "./content.json";

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
          <SubHeadingBox textHeading={content.name} />
          <ParagraphBox textContent={[content.title]} />
        </Box>
      </Flex>
      <Box width={["100%", "90%", "80%", "70%", "60%"]} mx={"auto"}>
        <ParagraphBox textContent={content.AboutMe} />
      </Box>
    </Flex>
  );
}

export default About;
