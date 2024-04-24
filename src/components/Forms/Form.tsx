"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface FormDetailsProps {
  title: string;
  inputFields: {
    fieldId: string;
    label: string;
    inputType: string;
    directionContent: string;
    placeholder: string;
    options?: string[] | undefined;
    explain?: string;
  }[];
  submitButton: string;
  submitFunction: ({}) => void;
}

function Form({ title, inputFields, submitButton, submitFunction }: FormDetailsProps) {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  // Function to handle input changes
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitFunction(formValues);
  };

  return (
    <Flex
      as="section"
      mt={[35, 100]}
      w={[300, 400, 500, 600]}
      flexDirection="column"
      alignItems={"center"}
    >
      <Heading
        fontFamily="var(--font-varela_round)"
        color={"#815B5B"}
        fontSize={28}
        textAlign={"center"}
        py={4}
        mx={[3, 3, 7, 0]}
        mt={5}
        mb={1}
        tabIndex={1}
      >
        {title}
      </Heading>
      <form onSubmit={submitForm}>
        <FormControl w={[300, 400, 500, 600]}>
          {inputFields.map((inputField) => (
            <Stack
              key={inputField.fieldId}
              direction={["column", "row"]}
              justifyContent={["center", "space-between"]}
              alignItems={["center", "flex-end"]}
              mb={5}
              _hover={{ backgroundColor: "#815B5B33" }}
            >
              {inputField.inputType !== "select" && (
                <>
                  <Tooltip label={inputField.explain} color={"#fff"} bgColor={"#815B5B"}>
                    <FormLabel>{inputField.label}:</FormLabel>
                  </Tooltip>
                  <Input
                    type={inputField.inputType}
                    name={inputField.fieldId}
                    id={inputField.fieldId}
                    placeholder={inputField.placeholder}
                    w={["100%", "60%"]}
                    dir={inputField.directionContent}
                    borderRadius={0}
                    borderWidth={0}
                    borderBottomWidth={1}
                    borderColor={"#000"}
                    focusBorderColor="#815B5B"
                    variant={"flushed"}
                    isInvalid={false}
                    errorBorderColor="red.300"
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}
              {inputField.inputType === "select" && (
                <>
                  <Tooltip 
                    label={inputField.explain} color={"#fff"} bgColor={"#815B5B"}>
                    <FormLabel w={"max-content"}>{inputField.label}:</FormLabel>
                  </Tooltip>
                  <Select
                    name={inputField.fieldId}
                    id={inputField.fieldId}
                    onChange={handleSelectChange}
                    required
                    isInvalid={false}
                    errorBorderColor="red.300"
                    w={["100%", "60%"]}
                    dir={inputField.directionContent}
                    placeholder={inputField.placeholder}
                    borderRadius={0}
                    borderWidth={0}
                    borderBottomWidth={1}
                    borderColor={"#000"}
                    focusBorderColor="#815B5B"
                    variant={"flushed"}
                    pr={8}
                  >
                    {inputField.options?.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </>
              )}
            </Stack>
          ))}
        </FormControl>
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Button
            type="submit"
            bgColor={"#C5A880"}
            _hover={{ bgColor: "#C5A880aa" }}
            color={"black"}
            shadow={"3px 3px 5px #888"}
            my={5}
          >
            {submitButton}
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default Form;
