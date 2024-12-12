"use client";
import { Button, Flex } from "@chakra-ui/react";
import TabButton from "../TabButton.tsx/TabButton";
import { useEffect, useState } from "react";
import About from "../About/About";

const tabButtonsInitial = [
  {
    id: "about",
    content: "אודות",
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
      w={["100%", "70%"]}
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
        borderColor={"gray.400"}
        width={"100%"}
        height={"500px"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        bgColor={"white"}
        overflowY={"scroll"}
      >
        {
          page === "about" ? 
            <About /> : 
            <p>Content</p>
        }
      </Flex>
    </Flex>
  );
}

export default PresentMe;
