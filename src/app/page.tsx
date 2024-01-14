import About from "@/components/About/About";
import { Flex } from "@chakra-ui/react";
import Courses from "@/components/CoursesOverview/CoursesOverview";
import Contact from "@/components/Contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <About />
      <Courses />
      <Portfolio />
      <Contact />
    </Flex>
  );
}
