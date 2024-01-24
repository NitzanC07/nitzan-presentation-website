import { Box, Flex, Heading, Link } from "@chakra-ui/react";

function CoursesPage() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box mt="70px">
        <Heading
          as="h2"
          style={{ fontFamily: "Varela Round, sans-serif" }}
          fontSize={23}
        >
          קורסים
        </Heading>
        <Link href="/courses/basic-course/1.1">קורס בסיסי</Link>
        <Link href="/courses/master-course/1.1">קורס מתקדם</Link>
        <Link href="/courses/creative-writing/1.1">סדנת כתיבה יצירתית</Link>
      </Box>
    </Flex>
  );
}

export default CoursesPage;
