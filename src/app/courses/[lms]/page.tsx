import LessonContent from "@/components/LearningManagementSystem/LessonContent/LessonContent";
import LessonTitle from "@/components/LearningManagementSystem/LessonTitle/LessonTitle";
import NavLessonsList from "@/components/LearningManagementSystem/NavLessonsList/NavLessonsList";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

function LearningManagementSystemPage({ params }: { params: { lms: string } }) {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Grid
        templateColumns={["1fr", "1fr", "1fr 2fr", "1fr 4fr"]}
        mt="70px"
        w="100%"
        gap={0}
      >
        <GridItem rowSpan={2} colSpan={1} bgColor={"blue.200"} p={4}>
          <Heading
            as="h2"
            style={{ fontFamily: "Varela Round, sans-serif" }}
            fontSize={23}
            mb={5}
          >
            רשימת שיעורים
          </Heading>

          <NavLessonsList selectedCourse={params.lms} />
        </GridItem>

        <GridItem colSpan={1} bgColor={"blue.100"} h={20} p={4}>
          <LessonTitle />
        </GridItem>

        <GridItem
          colSpan={1}
          bgColor={"blue.50"}
          w="100%"
          minH={400}
          py={4}
          px={"auto"}
        >
          <LessonContent selectedCourse={params.lms} />

          <Text mt={"70px"}>Params: {params.lms}</Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default LearningManagementSystemPage;
