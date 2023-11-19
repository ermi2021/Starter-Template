import { Box, useColorModeValue, Flex,Text, CloseButton } from "@chakra-ui/react";
import { SidebarProps } from "../../props/sidebar";
import UserNavigationDropDown from "../user/navDropdown";
import LinkItems from "../../utils/data/sidebar/menuitems";
import NavItem from "./navitem";
import { useNavigate } from "react-router";

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
        <NavItem key={link.name} icon={link.icon} onClick={()=>{
            navigate(link.route);
        }}>
          {link.name}
        </NavItem>
      ))}
      <Box display={{ sm: "block", md: "none" }} ml={7}>
       <UserNavigationDropDown/>
      </Box>
    </Box>
  );
};
export default SidebarContent;
