import path from "path";
import fs from "fs";
import LessonContent from "@/components/LearningManagementSystem/LessonContent/LessonContent";
import LessonTitle from "@/components/LearningManagementSystem/LessonTitle/LessonTitle";
import NavLessonsList from "@/components/LearningManagementSystem/NavLessonsList/NavLessonsList";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export interface Lesson {
  lessonId: string;
  title: string;
}
export interface ModuleCourse {
  module: string;
  title: string;
  lessons: Lesson[];
}
interface LmsProps {
  courseData: ModuleCourse[];
}

async function getData(selectedCourse: string) {
  const filePath = path.join(process.cwd(), "data", `${selectedCourse}.json`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const courseData: ModuleCourse[] = JSON.parse(fileData);
  return courseData;
}

export default async function LearningManagementSystemPage({ params }: { params: { lms: string } }) {
  // const readCourseDataFromFile = (selectedCourse: string) => {
  //   const filePath = path.join(process.cwd(), "data", `${selectedCourse}.json`);
  //   const fileData = fs.readFileSync(filePath, "utf-8");
  //   const courseData: ModuleCourse[] = JSON.parse(fileData);
  //   return courseData;
  // };

  const courseData = await getData(params.lms);

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

          <NavLessonsList courseData={courseData} />
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
          <LessonContent />

          <Text mt={"70px"}>Params: {params.lms}</Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}


// export async function getStaticProps({ params }: {params: {selectedCourse: string}}) {
//   console.log("PARAMS", params);

//   const { selectedCourse } = params;
//   console.log(selectedCourse);
//   const filePath = path.join(process.cwd(), "data", `${selectedCourse}.json`);
//   const fileData = fs.readFileSync(filePath, "utf-8");
//   const courseData: ModuleCourse[] = JSON.parse(fileData);
//   return { props: { courseData } };
// }

// export async function getStaticPaths() {
//   const courses = ["basic-course", "master-course"];
//   const paths = courses.map((course) => ({
//     params: { selectedCourse: course },
//   }));
//   return { paths, fallback: false };
// }
