"use client";
import Form from "@/components/Forms/Form";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import NextLink from "next/link";
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

interface FormValues {
  email?: string;
  password?: string;
}

function LoginForm() {
  const inputFields = [
    {
      fieldId: "email",
      label: "דואר אלקטרוני",
      inputType: "email",
      directionContent: "ltr",
      placeholder: "your-name@example.com",
    },
    {
      fieldId: "password",
      label: "סיסמא",
      inputType: "password",
      directionContent: "ltr",
      placeholder: "Your password...",
    },
  ];

  const loginUser = (formValues: FormValues) => {
    console.log(`User ${formValues.email} is logged in.`);
  };

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
    >
      <Form
        submitFunction={loginUser}
        title="התחברות"
        inputFields={inputFields}
        submitButton="התחבר"
      />

      <Text mb={464}>
        עדיין לא רשום? <Link as={NextLink} href="/register">הרשם כאן</Link>
      </Text>
    </Flex>
  );
}

export default LoginForm;
