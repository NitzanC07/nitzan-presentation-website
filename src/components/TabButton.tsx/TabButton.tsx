"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface TabButtonProps {
  id: string;
  content: string;
  isActive: boolean;
  handleClick: () => void;
}

function TabButton({ id, content, isActive, handleClick }: TabButtonProps) {
  
  return (
    <Button
      id={id}
      borderBottomRadius={0}
      borderTopRadius={"20px"}
      bgColor={isActive ? "#133E87ff" : "#133E8777"}
      _hover={{ bgColor: "#133E87dd" }}
      color={"#F3F3E0"}
      pr={5}
      pl={5}
      onClick={() => handleClick()}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
    >
      {content}
    </Button>
  );
}

export default TabButton;
