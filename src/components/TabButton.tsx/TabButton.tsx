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
      bgColor={isActive ? "gray.400" : "gray.600"}
      _hover={{ bgColor: "gray.500" }}
      color={"white"}
      pr={5}
      pl={5}
      onClick={() => handleClick()}
    >
      {content}
    </Button>
  );
}

export default TabButton;
