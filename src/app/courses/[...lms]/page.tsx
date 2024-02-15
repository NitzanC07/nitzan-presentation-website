import path from "path";
import fs from "fs";
import LessonTitle from "@/components/LearningManagementSystem/LessonTitle/LessonTitle";
import NavLessonsList from "@/components/LearningManagementSystem/NavLessonsList/NavLessonsList";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import LessonSections from "@/components/LearningManagementSystem/LessonContent/LessonSections";
import { ModuleCourse } from "@/types/coursesTypes";

async function getCourseData(selectedCourse: string) {
  // * Function that read the data of the selected course as SSG method.
  const filePath = path.join(process.cwd(), "data", `${selectedCourse}.json`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const courseData: ModuleCourse = JSON.parse(fileData);
  return courseData;
}

export default async function LearningManagementSystemPage({
  params,
}: {
  params: { lms: string };
}) {
  // * Call the function of reading course data appropriate to params url.
  const courseData = await getCourseData(params.lms[0]);

  return (
    <Flex
      as="main"
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Grid
        as="section"
        templateColumns={["1fr", "1fr", "1fr 2fr", "1fr 4fr"]}
        templateRows={["80px 1fr"]}
        mt="70px"
        w="100%"
        gap={0}
      >
        <GridItem
          as="nav"
          rowSpan={2}
          colSpan={1}
          bgColor={"orange.700"}
          p={4}
          tabIndex={1}
        >
          <Heading
            as="h2"
            style={{ fontFamily: "Varela Round, sans-serif" }}
            fontSize={23}
            color="white"
            mb={5}
            tabIndex={1}
          >
            רשימת שיעורים
          </Heading>

          <NavLessonsList courseData={courseData} />
        </GridItem>

        <GridItem as="section" colSpan={1} bgColor={"orange.200"} py={3} px={5}>
          <LessonTitle courseData={courseData} lessonId={params.lms[1]} />
        </GridItem>

        <GridItem
          as="section"
          colSpan={1}
          bgColor={"orange.50"}
          w="100%"
          minH={"700px"}
          pt={0}
          pb={16}
          px={"auto"}
          m={0}
        >
          <LessonSections courseData={courseData} lessonId={params.lms[1]} />
        </GridItem>
      </Grid>
    </Flex>
  );
}
