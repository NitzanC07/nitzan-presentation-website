import About from "@/components/About/About";
import { varelaRound, inter, rubik } from "./fonts";
import styles from "./page.module.css";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Courses from "@/components/Courses/Courses";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <About />
      <Courses />
      <Contact />
    </Flex>
  );
}
