import {
  Box,
  Center,
  HStack,
  Spacer,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignContent={"center"}
      justifyContent={{ sm: "flex-start", lg: "center", md: "center" }}
    >
      <Box
        m={{ base: 1, sm: 1, md: 5, lg: 10 }}
        p={{ base: 2, sm: 2, md: 5, lg: 10 }}
        w={{ base: "100%", sm: "100%", md: "80%", lg: "70%" }}
        bg={"white"}
        boxShadow={"lg"}
        borderRadius={"lg"}
      >
        <Box>
          <Text
            size={"lg"}
            fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "xl" }}
          >
            Account Details
          </Text>
          <Divider />
        </Box>

        <HStack spacing={4} m={4} direction="row" align="center">
          <Text fontWeight={"normal"}   fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "xl" }}>current username</Text>
          <Spacer />
          <Button
            colorScheme="teal"
            size="sm"
            variant={"outline"}
            color={"green.400"}
            fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "xl" }}
          >
            update
          </Button>
        </HStack>
        <Divider />
        <HStack spacing={4} m={4} direction="row" align="center">
          <Text fontWeight={"normal"}>current username</Text>
          <Spacer />
          <Button
            colorScheme="teal"
            size="sm"
            variant={"outline"}
            color={"green.400"}
          >
            update
          </Button>
        </HStack>
        <Divider />
        <HStack spacing={4} m={4} direction="row" align="center">
          <Text fontWeight={"normal"}>current username</Text>
          <Spacer />
          <Button
            colorScheme="teal"
            size="sm"
            variant={"outline"}
            color={"green.400"}
          >
            update
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Profile;
