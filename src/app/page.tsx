import About from "@/components/About/About";
import { Flex } from "@chakra-ui/react";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import Contact from "@/components/Contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";
import BlogArticles from "@/components/BlogArticles/BlogArticles";

export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#e6e6e6"}
    >
      <About />
      <ServicesOverview />
      <BlogArticles />
      <Portfolio />
      <Contact />
    </Flex>
  );
}
