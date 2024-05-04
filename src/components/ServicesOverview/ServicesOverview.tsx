import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import ULbox from "../LearningManagementSystem/LessonContent/ULbox";

function ServicesOverview() {
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
          מה אני נותן?
        </Heading>
        <ULbox
          content={["אתר תדמית לעסק", "אימוני ריצה וכושר", "שיעור פרטי בתכנות", "קורס פיתוח אתרים לבתי ספר"]}
        />
      </Box>
    </Flex>
  );
}

export default ServicesOverview;
