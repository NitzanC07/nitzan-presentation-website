import {
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { varelaRound } from "../fonts";
import NavLessonsList from "@/components/LearningManagementSystem/NavLessonsList/NavLessonsList";
import LessonTitle from "@/components/LearningManagementSystem/LessonTitle/LessonTitle";
import LessonContent from "@/components/LearningManagementSystem/LessonContent/LessonContent";

function LearningManagementSystem() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Grid templateColumns={["1fr","1fr","1fr 2fr", "1fr 4fr"]} mt="70px" w="100%" gap={0}>
        <GridItem rowSpan={2} colSpan={1} bgColor={"blue.200"} p={4}>
          <Heading
            as="h2"
            style={{ fontFamily: "Varela Round, sans-serif" }}
            fontSize={23}
          >
            רשימת שיעורים
          </Heading>

          <NavLessonsList />
        </GridItem>

        <GridItem colSpan={1} bgColor={"blue.100"} h={20} p={4}>
          <LessonTitle />
        </GridItem>

        <GridItem colSpan={1} bgColor={"blue.50"} w='100%' minH={400} py={4} px={'auto'}>
          <LessonContent />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default LearningManagementSystem;
