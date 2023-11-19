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
  useToast,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {login} from "../../../services/userServices"
import DialogBox from "../../../components/dialogbox/index"

const Login = (props: {
  onCloseModal: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPasword, setShowPassword] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [dialogBoxMessage, setDialogBoxMessage] = useState("Login successful");
  const toast = useToast();

  const navigate = useNavigate();
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
      login(values.username, values.password).then((res)=>{
        if (res) {
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position:'top-right',
            variant:'left-accent',
          })
          setIsLoading(false)
          setTimeout(() => {
           props.onCloseModal();
          }, 3000);
        }
        else {
          toast({
            title: 'Login failed.',
            description: "invalid credientials, try again!",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:'top-right',
            variant:'left-accent',
          })
          setIsLoading(false)
          props.onCloseModal();
        }
      })
    },
  });
  return (
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
            fontSize={12}
          >
            Log In
          </Button>
        </Stack>
        <Divider orientation="horizontal" marginY={2} size={"lg"} />
        <Stack spacing={"auto"} paddingX={3}>
          <Button
            color={"teal.500"}
            variant={"link"}
            fontSize={13}
            fontWeight={"bold"}
          >
            Forgot Password?
          </Button>
          <Spacer />
          <Center>
            <HStack>
              <Text
                fontSize={{ base: 12, sm: 12, md: 14, lg: 14, xl: 14 }}
                fontWeight={"bold"}
                m={0}
                color={"teal.500"}
              >
                Didn't have an account?
              </Text>
              <Button
                 color={"black"}
                
                variant={"link"}
                fontSize={{ base: 12, sm: 12, md: 13, lg: 13, xl: 13 }}
                fontWeight={"bold"}
                m={0}
                onClick={()=>{navigate('/signup')}}
              >
                Sign up
              </Button>
            </HStack>
          </Center>
        </Stack>
        <DialogBox
          active={showDialogBox}
          message={dialogBoxMessage}
          okayButtonText={"Okay"}
          onOkay={() => {
            setShowDialogBox(false);
            navigate("/");
          }}></DialogBox>
      </Box>  
  );
};

export default Login;
