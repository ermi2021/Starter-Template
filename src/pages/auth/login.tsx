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
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box bg={"#f1f1f1"} width="100%" height="100vh" overflow={"hidden"}>
      <AbsoluteCenter>
        <Box bg={"white"} p={5} borderRadius={"lg"} w={"50vh"} boxShadow={"lg"} dropShadow={'lg'}>
          <Divider
            orientation="horizontal"
            color={"black"}
            size={"lg"}
            height={"0.5"}
          />
          <Stack spacing={4}>
            <Box marginX={'auto'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
              <Text fontSize="xl" fontWeight={"bold"} >
                Login
              </Text>
              <Text fontSize="sm" textAlign={'center'}>Please enter your username and password</Text>
            </Box>
            <Input placeholder="Username" size="md" />
            <Input placeholder="Password" size="md" />
            <Button colorScheme={"teal"} variant={"solid"}>
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
