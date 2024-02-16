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

function CoursesPage() {
  const coursesLink = [
    {
      title: "מסע בזמן דרך פיתוח אתרי אינטרנט",
      description:
        "קורס הבסיס לפיתוח אתרי אינטרנט בעזרת שפת HTML, עיצוב אתרים בעזרת CSS, ופיתוח פונקציונלי בעזרת שפת Java Script הפופולרית. את הקורס מלווים תרגולים רבים לחומר התאורתי בהשראת ההיסטוריה של מדינת ישראל.",
      link: "/courses/time-journey-through-web-developmental/1.1",
      imagePath: "/images/stylingImages/ThreeStones-html-css-js.png",
      imageAlt: "Little stalk erupts from the ground.",
    },
    {
      title: "קורס בניית אתרים מתקדם",
      description: "React",
      link: "/courses/master-course/1.1",
      imagePath: "/images/stylingImages/WallReact.png",
      imageAlt: "Young tree grow up on the groud.",
    },
    {
      title: "סדנת כתיבה יצירתית",
      description: "תקציר הקורס",
      link: "/courses/creative-writing/1.1",
      imagePath: "/images/Colorful_tree_with_rainbow_lea2.jpeg",
      imageAlt: "Colorful tree with rainbow leaves.",
    },
  ];

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
          fontSize={26}
          my={10}
          tabIndex={1}
        >
          קורסים
        </Heading>

        {coursesLink.map((course, i) => (
          <Card
            key={i}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            borderWidth={2}
            borderColor="yellow.500"
            bgColor={"gray.200"}
            mb={5}
            w={800}
          >
            <Image
              src={`${course.imagePath}`}
              alt={`${course.imageAlt}`}
              width={250}
            />
            <CardBody pos={"relative"}>
              <Heading
                style={{ fontFamily: "Varela Round, sans-serif" }}
                fontSize={24}
                mb={5}
                tabIndex={1}
              >
                {course.title}
              </Heading>
              <Text
                style={{ fontFamily: "Varela Round, sans-serif" }}
                fontSize={18}
                mb={5}
                tabIndex={1}
              >
                {course.description}
              </Text>
              <Link
                href={`${course.link}`}
                style={{ fontFamily: "Varela Round, sans-serif" }}
                pos={"absolute"}
                bottom={3}
                left={3}
                tabIndex={1}
              >
                <Button
                  style={{ fontFamily: "Varela Round, sans-serif" }}
                  colorScheme="yellow"
                  tabIndex={-1}
                >
                  כניסה לקורס
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Flex>
  );
}

export default CoursesPage;
