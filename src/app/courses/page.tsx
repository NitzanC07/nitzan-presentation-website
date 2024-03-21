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

/**
 * Pass the fetch all courses data to this page,
 * and then when the user click to enter to any selected course
 * call to function that filter that course,
 * check if the specific user has authrized to this course,
 * and navigate to it.
 */

function CoursesPage() {
  const coursesLink = [
    {
      title: "מסע בזמן דרך פיתוח אתרי אינטרנט",
      description:
        "בקורס זה לומדים את היסודות של בניית אתר אינטרנט בעזרת שילוב של שפות HTML ושפת עיצוב האתרים CSS. במסגרת הקורס, מלבד הידע הטכני, התלמידים גם יצרו אתר באמצעות תרגולים לאורך הקורס שנוגעים באירועים היסטוריים משמעותיים.",
      link: "/courses/time-journey-through-web-developmental/1.1",
      imagePath: "/images/stylingImages/HTMLCSS_cover.png",
      imageAlt:
        "A realistic image of a wall in style of Jerusalem bricks, with close up on two bricks.",
      isActive: true,
    },
    {
      title: "פיתוח אתרי אינטרנט עם Java Script",
      description: "בקרוב...",
      link: "/courses/master-course/1.1",
      imagePath: "/images/stylingImages/js_cover.png",
      imageAlt: "A gate in style of Herodes building.",
      isActive: false,
    },
    {
      title: "סדנת כתיבה יצירתית",
      description: "בקרוב...",
      link: "/courses/creative-writing/1.1",
      imagePath: "/images/stylingImages/Colorful_tree_with_rainbow_lea2.jpeg",
      imageAlt: "Colorful tree with rainbow leaves.",
      isActive: false,
    },
  ];

  

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
          color={'#532E1C'}
          my={10}
          tabIndex={1}
        >
          קורסים
        </Heading>

        {coursesLink.map((course, i) => (
          <Card
            key={i}
            direction={["column", "column", "row", "row"]}
            overflow="hidden"
            variant="outline"
            borderWidth={2}
            borderColor="#532E1C"
            bgColor={"#C5A88088"}
            _hover={{
              shadow: "1px 1px 5px #888"
            }}
            mb={5}
            w={[200, 400, 600, 800]}
          >
            <Image
              src={`${course.imagePath}`}
              alt={`${course.imageAlt}`}
              width={["100%", "100%", "30%"]}
            />
            <CardBody pos={"relative"}>
              <Flex flexDir={["column", "row"]} justifyContent="space-between">
                <Heading
                  // style={{ fontFamily: "Varela Round, sans-serif" }}
                  fontFamily="var(--font-varela_round)"
                  fontSize={[15, 19, 20, 24]}
                  color={"#532E1C"}
                  mb={5}
                  tabIndex={1}
                >
                  {course.title}
                </Heading>
                <Link
                  href={`${course.isActive ? course.link : '/courses'}`}
                  mb={[4, 0]}
                  tabIndex={1}
                >
                  <Button
                    bgColor={ course.isActive ? "#532E1C" : "#532E1C33"}
                    _hover={{bgColor: course.isActive ? "#532E1Caa" : "#532E1C33"}}
                    color={course.isActive ? "white" : "#532E1C55"}
                    shadow={course.isActive ? "2px 2px 5px #888": 0}
                    marginRight={2}
                    tabIndex={-1}
                  >
                    {course.isActive ? "כניסה לקורס" : "קורס סגור"}
                  </Button>
                </Link>
              </Flex>
              <Text
                // style={{ fontFamily: "Varela Round, sans-serif" }}
                fontSize={[14, 16, 16, 18]}
                color={"#0F0F0F"}
                mb={5}
                tabIndex={1}
              >
                {course.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Flex>
  );
}

export default CoursesPage;
