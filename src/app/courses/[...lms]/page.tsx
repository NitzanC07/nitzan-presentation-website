import path from "path";
import fs from "fs";
import LessonTitle from "@/components/LearningManagementSystem/LessonTitle/LessonTitle";
import NavLessonsList from "@/components/LearningManagementSystem/NavLessonsList/NavLessonsList";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import LessonSections from "@/components/LearningManagementSystem/LessonContent/LessonSections";
import { ModuleCourse } from "@/types/coursesTypes";
import { notFound } from "next/navigation";
import NotFound from "@/app/not-found";

async function getCourseData(selectedCourse: string) {
  // * Function that read the data of the selected course as SSG method.
  // * Get the data from a local file inside the project structure.
  const filePath = path.join(process.cwd(), "/data", `/${selectedCourse}.json`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const courseData: ModuleCourse = JSON.parse(fileData);
  return courseData;
}

// async function getCourseDataDB(selectedCourse: string) {
//   // * Function that read the data of the selected course as SSG method.
//   // * Get the data from the database of MongoDB => NitzanCourses => courses.courses
//   const url = `${process.env.NODE_ENV === "development" ?  process.env.DEV_URL : process.env.NEXT_PUBLIC_VERCEL_URL}`
    
//   const res = await fetch(`${url}/api/courses`, {
//     cache: "no-store",
//   });
//   if (!res.ok) return notFound();
//   const allCourses = res.json();

//   return allCourses;
// }

export default async function LearningManagementSystemPage({params,}: { params: { lms: string };}) {
  const courseId = params.lms[0]
  const lessonId = params.lms[1]

  // * Call the function of reading course data appropriate to params url from DB
  // const allCourses: ModuleCourse[] = await getCourseDataDB(courseId);
  // const content: ModuleCourse | undefined = allCourses.find(
  //   (selected) => selected.courseId === courseId
  // );
  // if (!content) {
  //   return <NotFound />
  // }

  // * Call the function of reading course data appropriate to params url from local file.
  const courseData = (await getCourseData(params.lms[0]));
  const content = courseData;

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
        mt="60px"
        w="100%"
        gap={0}
      >
        <GridItem
          as="nav"
          rowSpan={2}
          colSpan={1}
          // bgColor={"orange.700"}
          // bgColor={"#815B5B"}
          bgColor={"#532E1C"}
          p={4}
          tabIndex={1}
        >
          <Heading
            as="h2"
            fontFamily="var(--font-varela_round)"
            fontSize={23}
            color="white"
            mb={5}
            tabIndex={1}
          >
            רשימת שיעורים
          </Heading>

          <NavLessonsList content={content} />
        </GridItem>

        <GridItem
          as="section"
          colSpan={1}
          // bgColor={"orange.200"}
          // bgColor={"#9E7676"}
          bgColor={"#C5A880"}
          color={"white"}
          py={3}
          px={5}
        >
          <LessonTitle courseData={content} lessonId={lessonId} />
        </GridItem>

        <GridItem
          as="section"
          colSpan={1}
          // bgColor={"orange.50"}
          // bgColor={"#FFF8EA"}
          bgColor={"#E6E6E6"}
          w="100%"
          minH={"700px"}
          pt={0}
          pb={16}
          px={"auto"}
          m={0}
        >
          <LessonSections courseData={content} lessonId={lessonId} />
        </GridItem>
      </Grid>
    </Flex>
  );
}
