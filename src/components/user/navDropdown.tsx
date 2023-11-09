import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  Text,
  VStack,
  MenuDivider,
} from "@chakra-ui/react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserNavigationDropDown = () => {
  const navigate = useNavigate();
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <FiUser />
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem
              onClick={() => {
                navigate("/user");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem>Settings</MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/");
              }}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
};

export default UserNavigationDropDown;
