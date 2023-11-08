import {
  Box,
  Stack,
  Input,
  Text,
  Center,
  Divider,
  Button,
  HStack,
  Spacer,
  InputGroup,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import phoneRegExp from "../../../utils/validation/phonenumber";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPasword, setShowPassword] = useState(false);
  const [showNewPasword, setShowNewPassword] = useState(false);
  const [showPasswordConfirmationError, setShowPasswordConfirmationError] =
    useState(false);
  const navigate = useNavigate();
  const SignUpSchema = yup.object().shape({
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    username: yup.string().required(),
    password: yup.string().required("password is required"),
    confirmpassword: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      username: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setTimeout(() => {
        if (formik.isValid) {
          if (values.password === values.confirmpassword) {
            navigate("/home");
          } else {
            setShowPasswordConfirmationError(true);
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
        }
      }, 2000);
    },
  });
  return (
    <Flex
      px={{ base: 5 }}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#f1f1f1"}
      width="100%"
      height="100vh"
      overflow={"hidden"}
    >
      <Box
        bg={"white"}
        p={7}
        borderRadius={"lg"}
        boxShadow={"lg"}
        dropShadow={"lg"}
      >
        <Divider
          orientation="horizontal"
          color={"black"}
          size={"lg"}
          height={"0.5"}
        />
        <Stack spacing={4}>
          <Box>
            <Text fontSize="xl" fontWeight={"bold"}>
              SignUp
            </Text>
            <Text fontSize="sm">
              Please fill the following information to register.
            </Text>
          </Box>
          {showPasswordConfirmationError && (
            <Text
              fontSize={"sm"}
              fontWeight={"bold"}
              border={"1px"}
              borderRadius={"md"}
              p={"2"}
              borderColor={"red.400"}
              color={"red.400"}
              textAlign={"left"}
            >
              Password didn't match
            </Text>
          )}

          <Input
            isInvalid={formik.errors.phoneNumber ? true : false}
            errorBorderColor="red.200"
            borderWidth={"thin"}
            focusBorderColor="gray.300"
            borderColor={"gray.400"}
            name="username"
            placeholder="Phone Number"
            size="md"
            onChange={formik.handleChange("phoneNumber")}
          />
          <Input
            isInvalid={formik.errors.username ? true : false}
            errorBorderColor="red.200"
            borderWidth={"thin"}
            focusBorderColor="gray.300"
            borderColor={"gray.400"}
            name="username"
            placeholder="Username"
            size="md"
            onChange={formik.handleChange("username")}
          />
          <InputGroup size="md">
            <Input
              name="Password"
              pr="4.5rem"
              isInvalid={formik.errors.password ? true : false}
              errorBorderColor="red.200"
              focusBorderColor="gray.300"
              borderColor={"gray.400"}
              type={showNewPasword ? "text" : "password"}
              placeholder="Enter New Password"
              onChange={formik.handleChange("password")}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => {
                  setShowNewPassword(!showNewPasword);
                }}
              >
                {showNewPasword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size="md">
            <Input
              name="confirmpassword"
              pr="4.5rem"
              isInvalid={formik.errors.password ? true : false}
              errorBorderColor="red.200"
              focusBorderColor="gray.300"
              borderColor={"gray.400"}
              type={showPasword ? "text" : "password"}
              placeholder="Repeat Password"
              onChange={formik.handleChange("confirmpassword")}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => {
                  setShowPassword(!showPasword);
                }}
              >
                {showPasword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            isLoading={isLoading}
            onClick={() => {
              formik.handleSubmit();
            }}
            colorScheme={"teal"}
            variant={"solid"}
            fontSize={12}
          >
            Sign Up
          </Button>
        </Stack>
        <Divider orientation="horizontal" marginY={2} size={"lg"} />
        <Stack spacing={"auto"} paddingX={3}>
          <Spacer />
          <Center>
            <HStack>
              <Text
                fontSize={{ base: 12, sm: 12, md: 14, lg: 14, xl: 14 }}
                fontWeight={"normal"}
                m={0}
              >
                Already have an account?
              </Text>
              <Button
                colorScheme={"facebook"}
                variant={"link"}
                fontSize={{ base: 12, sm: 12, md: 14, lg: 14, xl: 14 }}
                fontWeight={"normal"}
                m={0}
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign In
              </Button>
            </HStack>
          </Center>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SignUp;
