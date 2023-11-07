import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  Grid,
  GridItem,
  HStack,
  Spacer,
  useColorModeValue,
  useDisclosure,
  Text,
  Hide,
} from "@chakra-ui/react";
import UserNavigationDropDown from "../../../components/user/navDropdown";
import SidebarContent from "../../../components/sidebar";
import MobileNav from "../../../components/sidebar/onmobile";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Grid
          templateAreas={{
            base: '"main" "footer"',
            sm: `"main" "footer"`,
            md: `"header" "main" "footer"`,
            lg: '"header" "main" "footer"',
            xl: '"header" "main" "footer"',
            "2xl": '"header" "main" "footer"',
          }}
          gridTemplateRows={{
            base: "1fr 30px",
            sm: "1fr 30px",
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
          <Hide below="md">
            <GridItem bg="white" w={"100%"} area={"header"}>
              <HStack alignSelf={"center"} h={"100%"} px={10}>
                <Spacer />
                <UserNavigationDropDown />
              </HStack>
            </GridItem>
          </Hide>

          <GridItem
            px="5"
            area={"main"}
            marginTop={{
              base: "5",
              md: "0",
              sm: "5",
            }}
          >
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(2,1fr)",
                xl: "repeat(3,1fr)",
              }}
              h="100%"
              w={"100%"}
              gap={4}
            >
              <GridItem
                rowSpan={2}
                bg="teal.200"
                borderRadius={"lg"}
              ></GridItem>
              <GridItem
                rowSpan={2}
                bg="teal.200"
                borderRadius={"lg"}
              ></GridItem>
              <GridItem
                rowSpan={2}
                bg="teal.200"
                borderRadius={"lg"}
              ></GridItem>
              <GridItem
                rowSpan={2}
                bg="teal.200"
                borderRadius={"lg"}
              ></GridItem>
              <GridItem
                rowSpan={2}
                bg="teal.200"
                borderRadius={"lg"}
              ></GridItem>
              <GridItem
                rowSpan={2}
                bg="teal.200"
                borderRadius={"lg"}
              ></GridItem>
            </Grid>
          </GridItem>
          <GridItem pl="2" area={"footer"}>
            <Center>
              <Text>Footer</Text>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
