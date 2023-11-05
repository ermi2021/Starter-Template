import {
  Box,
  AbsoluteCenter,
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
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPasword, setShowPassword] = useState(false);

  const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required("password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setTimeout(() => {
        if (formik.isValid) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }, 2000);
    },
  });
  return (
    <Box bg={"#f1f1f1"} width="100%" height="100vh" overflow={"hidden"}>
      <AbsoluteCenter>
        <Box
          bg={"white"}
          p={5}
          borderRadius={"lg"}
          w={"50vh"}
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
                Login
              </Text>
              <Text fontSize="sm">Please enter your username and password</Text>
            </Box>
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
                name="password"
                pr="4.5rem"
                isInvalid={formik.errors.password ? true : false}
                errorBorderColor="red.200"
                focusBorderColor="gray.300"
                borderColor={"gray.400"}
                type={showPasword ? "text" : "password"}
                placeholder="Enter password"
                onChange={formik.handleChange("password")}
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
              fontSize={14}
            >
              LOGIN
            </Button>
          </Stack>
          <Divider orientation="horizontal" marginY={2} size={"lg"} />
          <Stack spacing={"auto"} paddingX={3}>
            <Button
              colorScheme={"facebook"}
              variant={"link"}
              fontSize={14}
              fontWeight={"normal"}
            >
              Forgot Password?
            </Button>
            <Spacer />
            <Center>
              <HStack>
                <Text fontSize={14} fontWeight={"normal"}>
                  Didn't have an account?
                </Text>
                <Button
                  colorScheme={"facebook"}
                  variant={"link"}
                  fontSize={14}
                  fontWeight={"normal"}
                >
                  Sign up
                </Button>
              </HStack>
            </Center>
          </Stack>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;
