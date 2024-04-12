"use client";
import Form from "@/components/Forms/Form";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

function LoginForm() {
  
  const inputFields = [
    {
      fieldId: "email",
      label: "דואר אלקטרוני",
      inputType: "email",
      directionContent: "ltr",
      placeholder: "your-name@provider.com"
    },
    {
      fieldId: "password",
      label: "סיסמא",
      inputType: "password",
      directionContent: "ltr",
      placeholder: "Your password..."
    }
  ]

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
      height={"91svh"}
    >
      <Form title="התחברות" inputFields={inputFields} submitButton="התחבר" />

      <Text>
        עדיין לא רשום? <Link href="/register">הרשם כאן</Link>
      </Text>
    </Flex>
  );
}

export default LoginForm;
