"use client";
import Form from "@/components/Forms/Form";
import NextLink from 'next/link';
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
import UserSchema from "../../../models/UserSchema";

interface FormValues {
  firstName?: string;
    lastName?: string;
    gender?: string;
    classLevel?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

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
      fieldId: "lastName",
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
      options: ["זכר", "נקבה"],
    },
    {
      fieldId: "classLevel",
      label: "כיתה*",
      inputType: "select",
      directionContent: "rtl",
      placeholder: "כיתת לימוד",
      explain: "אם אינך לומד בבית ספר, ציין שאתה לומד עצמאי.",
      options: ["ז'", "ח'", "ט'", "י'", 'י"א', 'י"ב', "לומד עצמאי"],
    },
    {
      fieldId: "email",
      label: "דואר אלקטרוני",
      inputType: "email",
      directionContent: "ltr",
      placeholder: "your-name@example.com",
    },
    {
      fieldId: "password",
      label: "סיסמא*",
      inputType: "password",
      directionContent: "ltr",
      placeholder: "Your password...",
      explain:
        "הסיסמא צריכה להיות מורכבת מאותיות באנגלית (קטנות או גדולות) ומספרים בלבד.",
    },
    {
      fieldId: "confirmPassword",
      label: "אימות סיסמא*",
      inputType: "password",
      directionContent: "ltr",
      placeholder: "Your password again...",
      explain: "הקלד את אותה סיסמא פעם נוספת.",
    },
  ];

  const createNewUser = async (formValues: FormValues) => {
    console.log("formValues", formValues);
    
    if (formValues.password !== formValues.confirmPassword) {
      console.log("The passwords aren't corresponds.");
      return;
    }
    try {
      fetch('/api/users', {
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formValues)
      })
      console.log(`User ${formValues.firstName} created.`);      

    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
  
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
    >
      <Form 
        title="הרשמה" 
        submitButton="הרשם" 
        inputFields={inputFields}
        submitFunction={createNewUser} 
      />

      <Text mb={10}>
        אתה כבר רשום? <Link as={NextLink} href="/login">התחבר כאן</Link>
      </Text>
    </Flex>
  );
}

export default Register;
