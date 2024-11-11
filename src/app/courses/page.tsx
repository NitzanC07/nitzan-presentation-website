import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { notFound, usePathname } from "next/navigation";
import { ModuleCourse } from "@/types/coursesTypes";
import fs from "fs/promises";
import path from "path";

/**
 * Pass the fetch all courses data to this page,
 * and then when the user click to enter to any selected course
 * call to function that filter that course,
 * check if the specific user has authrized to this course,
 * and navigate to it.
 */

// async function getCoursesDataDB() {
//   // * Function that read the data of the selected course as SSG method.
//   // * Get the data from the database of MongoDB => NitzanCourses => courses.courses
//   const url = `${process.env.NODE_ENV === "production" ?  process.env.NEXT_PUBLIC_VERCEL_URL : process.env.DEV_URL}`

//   const res = await fetch(`${url}/api/courses`, {
//     cache: "no-store",
//   });
//   if (!res.ok) return notFound();
//   const allCourses = res.json();

//   return allCourses;
// }

async function getCoursesData() {
  const coursesDataDirectory = path.join(process.cwd(), "/data/");
  try {
    const dataContent = await fs.readFile(
      coursesDataDirectory + "CoursesList.json",
      "utf8"
    );
    const courseData = JSON.parse(dataContent)
    return courseData;
  } catch (error) {
    console.error("Error reading CoursesList.json:", error);
    throw error;
  }
}

async function CoursesPage() {
  try {
    const allCourses: ModuleCourse[] = await getCoursesData();
    console.log("### ALL COURSES ###", typeof(dataContent));
    
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
    >
      <Box mt="60px">
        <Heading
          as="h2"
          fontFamily="var(--font-varela_round)"
          fontSize={26}
          color={"#532E1C"}
          my={10}
          tabIndex={1}
        >
          קורסים
        </Heading>

        {allCourses.map((course, i) => (
          <Card
            key={i}
            direction={["column", "column", "row", "row"]}
            overflow="hidden"
            variant="outline"
            borderWidth={2}
            borderColor="#532E1C"
            bgColor={"#C5A88088"}
            _hover={{
              shadow: "1px 1px 5px #888",
            }}
            mb={5}
            w={[200, 400, 600, 800]}
          >
            <Image
              src={`${course.coverImage.path}`}
              alt={`${course.coverImage.alternateText}`}
              width={["100%", "100%", "30%"]}
            />
            <CardBody pos={"relative"}>
              <Flex flexDir={["column", "row"]} justifyContent="space-between">
                <Heading
                  fontFamily="var(--font-varela_round)"
                  fontSize={[15, 19, 20, 24]}
                  color={"#532E1C"}
                  mb={5}
                  tabIndex={1}
                >
                  {course.courseName}
                </Heading>
                <Link
                  as={NextLink}
                  href={`${
                    course.isActive
                      ? `/courses/${course.courseId}/1.1`
                      : "/courses"
                  }`}
                  mb={[4, 0]}
                  cursor={course.isActive ? "pointer" : "default"}
                  tabIndex={1}
                >
                  <Button
                    bgColor={course.isActive ? "#532E1C" : "#532E1C33"}
                    _hover={{
                      bgColor: course.isActive ? "#532E1Caa" : "#532E1C33",
                    }}
                    color={course.isActive ? "white" : "#532E1C55"}
                    shadow={course.isActive ? "2px 2px 5px #888" : 0}
                    marginRight={2}
                    tabIndex={-1}
                    cursor={course.isActive ? "pointer" : "default"}
                  >
                    {course.isActive ? "כניסה לקורס" : "קורס סגור"}
                  </Button>
                </Link>
              </Flex>
              <Text
                fontSize={[14, 16, 16, 18]}
                color={"#0F0F0F"}
                mb={5}
                tabIndex={1}
              >
                {course.courseDescription}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Flex>
  );
} catch (error) {
    console.error('Error rendering CoursesPage:', error)
    return (
      <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
    >
      <Box mt='60px'>Error in loading courses page.</Box>
    </Flex>
    )
  }
}

export default CoursesPage;
