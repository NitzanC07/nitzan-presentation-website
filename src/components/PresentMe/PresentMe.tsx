"use client";
import { Button, Flex } from "@chakra-ui/react";
import TabButton from "../TabButton.tsx/TabButton";
import { useEffect, useState } from "react";
import About from "../About/About";
import Courses from "../Courses/Courses";

const tabButtonsInitial = [
  {
    id: "about",
    content: "מי אני?",
    isActive: true,
  },
  {
    id: "courses",
    content: "קורסים",
    isActive: false,
  },
  {
    id: "blog",
    content: "בלוג",
    isActive: false,
  },
  {
    id: "projects",
    content: "פרויקטים",
    isActive: false,
  },
];

function PresentMe() {
  const [TabButtons, setTabButtons] = useState(tabButtonsInitial);
  const [page, setPage] = useState("about");

  const handleTabClick = (id: string) => {
    setTabButtons(
      TabButtons.map((tabButton) => ({
        ...tabButton,
        isActive: tabButton.id === id,
      }))
    );
    setPage(id);
  };

  return (
    <Flex
      w={["100%", "80%", "70%", "60%"]}
      flexDirection={["column"]}
      justifyContent={["flex-start"]}
      alignItems={["flex-start"]}
      m={0}
      mt={["60px", 20]}
      p={0}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"flex-start"}
        width={"100%"}
        overflowY={"hidden"}
      >
        {TabButtons.map((tabButton) => (
          <TabButton
            key={tabButton.id}
            id={tabButton.id}
            isActive={tabButton.isActive}
            content={tabButton.content}
            handleClick={() => handleTabClick(tabButton.id)}
          />
        ))}
      </Flex>
      <Flex
        m={0}        
        py={5}
        px={3}        
        borderWidth={"7px"}
        borderColor={"#133E87"}
        width={"100%"}
        height={"70svh"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        bgColor={"#fff"}
        overflowY={"scroll"}
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      >
        {
          page === "about" ? 
            <About /> : 
            page === "courses" ? 
            <Courses /> :
            <p>Content</p>
        }
      </Flex>
    </Flex>
  );
}

export default PresentMe;
