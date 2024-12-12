import About from "@/components/About/About";
import { Box, Flex } from "@chakra-ui/react";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import Contact from "@/components/Contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";
import BlogArticles from "@/components/BlogArticles/BlogArticles";
import PresentMe from "@/components/PresentMe/PresentMe";
import Header from "@/components/Header/Header";
import { varela_round } from "@/utils/fonts";

export default function Home() {
    
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      height={'100svh'}
    >
      <Header backgroundColor='transparent' />
      <PresentMe />
    </Flex>
  );
}
