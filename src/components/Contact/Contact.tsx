import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SubHeadingBox from "../LearningManagementSystem/LessonContent/SubHeadingBox";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import content from "./content.json";
import TableData from "../LearningManagementSystem/LessonContent/TableData";

function Contact() {
  return (
    <Flex
      w={"100%"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      m={0}
      p={0}
      bgColor={"#133E87"}
      height={"100%"}
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
        <TableData headingRow={content.headingRow} rows={content.rows} />
      </Box>
    </Flex>
  );
}

export default Contact;
