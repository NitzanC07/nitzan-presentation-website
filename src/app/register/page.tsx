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

function Register() {
  const inputFields = [
    {
      fieldId: "firstName",
      label: "שם פרטי",
      inputType: "text",
      directionContent: "rtl",
      placeholder: "שם פרטי",
    },
    {
      fieldId: "latName",
      label: "שם משפחה",
      inputType: "text",
      directionContent: "rtl",
      placeholder: "שם משפחה",
    },
    {
      fieldId: "gender",
      label: "מגדר",
      inputType: "select",
      directionContent: "rtl",
      placeholder: "זכר / נקבה",
      options: ["זכר", "נקבה"]
    },
    {
      fieldId: "classLevel",
      label: "כיתה",
      inputType: "select",
      directionContent: "rtl",
      placeholder: "כיתת לימוד",
      explain: "אם אינך לומד בבית ספר, ציין שאתה לומד עצמאי.",
      options: ["ז'", "ח'", "ט'", "י'", "י\"א", "י\"ב", "לומד עצמאי"]

    },
    {
      fieldId: "email",
      label: "דואר אלקטרוני",
      inputType: "email",
      directionContent: "ltr",
      placeholder: "your-name@example.com",
    },
    {
      fieldId: "password1",
      label: "סיסמא",
      inputType: "password",
      directionContent: "ltr",
      placeholder: "Your password...",
      explain: "הסיסמא צריכה להיות מורכבת מאותיות באנגלית (קטנות או גדולות) ומספרים בלבד."
    },
    {
      fieldId: "password2",
      label: "אישור סיסמא",
      inputType: "password",
      directionContent: "ltr",
      placeholder: "Your password...",
      explain: "הקלד את אותה סיסמא פעם נוספת."
    },
  ];
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
      height={"91svh"}
    >
      <Form title="הרשמה" submitButton="הרשם" inputFields={inputFields} />
      <Text>
        אתה כבר רשום? <Link href="/login">התחבר כאן</Link>
      </Text>
    </Flex>
  );
}

export default Register;
