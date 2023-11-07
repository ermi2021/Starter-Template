import {
    Avatar,
    Box,
    Icon,
    Center,
    CloseButton,
    Flex,
    BoxProps,
    Drawer,
    DrawerContent,
    Grid,
    GridItem,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    useColorModeValue,
    useDisclosure,
    Text,
    FlexProps,
    Hide,
    VStack,
    MenuDivider,
  } from "@chakra-ui/react";
  import { ReactText } from "react";
  import {useNavigate} from 'react-router-dom';
  import {
    FiChevronDown,
    FiCompass,
    FiHome,
    FiMenu,
    FiSettings,
    FiStar,
    FiTrendingUp,
  } from "react-icons/fi";
  import { IconType } from "react-icons/lib";
  
  interface LinkItemProps {
    name: string;
    icon: IconType;
  }
  
  const LinkItems: Array<LinkItemProps> = [
    { name: "Menu 1", icon: FiHome },
    { name: "Menu 2", icon: FiTrendingUp },
    { name: "Menu 3", icon: FiCompass },
    { name: "Menu 4", icon: FiStar },
    { name: "Menu 5", icon: FiSettings },
  ];
  
  const menuItems: Array<LinkItemProps> = [
    { name: "MENU 1", icon: FiHome },
    { name: "MENU 2", icon: FiTrendingUp },
  ];
  
  interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
  }
  const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "teal.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    );
  };
  
  interface MobileProps extends FlexProps {
    onOpen: () => void;
  }
  
  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        borderBottomWidth="1px"
        justifyContent="flex-start"
        {...rest}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
    );
  };
  interface SidebarProps extends BoxProps {
    onClose: () => void;
  }
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
        <Box display={{ sm: "block", md: "none" }} ml={7}>
          <AdminDropDown/>
        </Box>
      </Box>
    );
  };
  
  const AdminDropDown = () => {
    const navigate = useNavigate();
    return(
      <HStack spacing={{ base: '0', md: '6' }} >
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
              <VStack
                display={{ base: 'none', md: 'flex',  sm:'flex',   xs:'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2">
                <Text fontSize="sm">Andrew Tate</Text>
                <Text fontSize="xs" color="gray.600">
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex', sm:'flex', xs:'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
        
            <MenuDivider />
            <MenuItem onClick={()=>{
                  navigate('/');
            }}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
       </HStack>
    )
  }
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
            <Hide below="md" >
            <GridItem  bg="white" w={'100%'} area={"header"}>
              <HStack alignSelf={"center"} h={"100%"} px={10}>
                <Spacer />
                <AdminDropDown/>
              </HStack>
            </GridItem>
            </Hide>
  
            <GridItem px="5" area={"main"}>
              <Grid  templateColumns={{base: 'repeat(1, 1fr)',md:'repeat(2,1fr)', lg:'repeat(2,1fr)',xl:'repeat(3,1fr)',  }} h="100%" w={"100%"} gap={4}>
                <GridItem rowSpan={2} bg="teal.200" borderRadius={'lg'}></GridItem>
                <GridItem rowSpan={2} bg="teal.200" borderRadius={'lg'}></GridItem>
                <GridItem rowSpan={2} bg="teal.200" borderRadius={'lg'}></GridItem>
                <GridItem rowSpan={2} bg="teal.200" borderRadius={'lg'}></GridItem>
                <GridItem rowSpan={2} bg="teal.200" borderRadius={'lg'}></GridItem>
                <GridItem rowSpan={2} bg="teal.200" borderRadius={'lg'}></GridItem>
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
  