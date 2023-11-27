/* eslint-disable react/jsx-no-undef */
import {
  Box,
  useColorModeValue,
  Flex,
  Text,
  CloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { SidebarProps } from "../../props/sidebar";
import UserNavigationDropDown from "../user/navDropdown";
import LinkItems from "../../utils/data/sidebar/menuitems";
import NavItem from "./navitem";
import { useNavigate } from "react-router";

const SidebarContent = ({ onCloseSidebar, ...rest }: SidebarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();

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
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => {
            if (link.active == false && !localStorage.getItem("token")) {
              onToggle();
            } else {
              navigate(link.route);
            }
          }}
        >
          {link.name}
        </NavItem>
      ))}

      <Box display={{ sm: "block", md: "none" }} ml={7}>
        <UserNavigationDropDown />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
       
        <ModalHeader>Sign in required</ModalHeader>
        <ModalCloseButton />
          <ModalBody fontWeight={'semibold'} mb={5}>Please sign in to go to your account page</ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default SidebarContent;
