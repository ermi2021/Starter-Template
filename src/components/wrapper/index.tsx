import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerContent,
  Grid,
  GridItem,
  HStack,
  Show,
  Spacer,
  Hide,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState} from "react";
import SidebarContent from "../sidebar";
import UserNavigationDropDown from "../user/navDropdown";
import MobileNav from "../sidebar/onmobile";
import SignUp from "../../pages/auth/signup";
import Login from "../../pages/auth/login";

const Wrap = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [registerClicked, setRegisterClicked] = useState(false);
  const token = localStorage.getItem("token");

  const closeModal = () => {
    onClose();
  };
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onCloseSidebar={() => {}}
        display={{ base: "none", md: "block" }}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {registerClicked ? (
              <SignUp onCloseModal={closeModal} />
            ) : (
              <Login onCloseModal={closeModal} />
            )}
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Drawer
        isOpen={false}
        placement="left"
        onClose={() => {}}
        returnFocusOnClose={false}
        onOverlayClick={() => {}}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onCloseSidebar={() => {}} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <Box ml={{ base: 0, md: 60 }}>
        <Grid
          templateAreas={{
            base: '"header" "main" "footer"',
            sm: `"header" "main" "footer"`, // Add header to "main" for sm
            md: `"header" "main" "footer"`,
            lg: '"header" "main" "footer"',
            xl: '"header" "main" "footer"',
            "2xl": '"header" "main" "footer"',
          }}
          gridTemplateRows={{
            base: "80px 1fr 30px",
            sm: "80px 1fr 30px", // Adjust row height for header in sm
            md: "80px 1fr 30px",
            lg: "80px 1fr 30px",
            xl: "80px 1fr 30px",
            "2xl": "80px 1fr 30px",
          }}
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "1fr",
            xl: "1fr",
            "2xl": "1fr",
          }}
          minH={"100vh"}
          color="blackAlpha.700"
          fontWeight="bold"
          rowGap={5}
        >
          {/* <Hide below="md"> */}
          <GridItem
            bg="white"
            display={"flex"}
            justifyContent={"center"}
            gap={"20"}
            flexDirection={"column"}
            h={"80px"}
            area={"header"}
            position={"sticky"}
            top={"0"}
            boxShadow={"sm"}
            zIndex="1000"
          >
            <HStack px={5}>
              <Show breakpoint="(max-width: 767px)">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                  Logo
                </Text>
              </Show>

              <Spacer />
              <Hide breakpoint="(max-width: 767px)">
                <Input
                  placeholder="Search"
                  m={5}
                  size={"md"}
                  width={"30%"}
                  borderColor={"gray.300"}
                  focusBorderColor={"gray.400"}
                />
              </Hide>

              {token === null || token === undefined ? ( // Check if token exists in local storage
                <Stack spacing={4} direction="row" align="center">
                  <Button
                    variant={"link"}
                    textDecoration={"none"}
                    colorScheme="teal"
                    size="sm"
                    onClick={() => {
                      setRegisterClicked(false);
                      onOpen();
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    color={"white"}
                    bgColor="#1475e1"
                    size="sm"
                    onClick={() => {
                      setRegisterClicked(true);
                      onOpen();
                    }}
                  >
                    Register
                  </Button>
                </Stack>
              ) : (
                <UserNavigationDropDown />
              )}
            </HStack>
          </GridItem>
          {/* </Hide> */}

          <GridItem
            px="5"
            area={"main"}
            marginTop={{
              base: "5",
              md: "0",
              sm: "5",
            }}
          >
            {children}
          </GridItem>
          <GridItem area={"footer"} position={"sticky"} zIndex={2} bottom={"0"}>
            <Show breakpoint="(max-width: 767px)">
              <MobileNav onOpen={onOpen} />
            </Show>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Wrap;
