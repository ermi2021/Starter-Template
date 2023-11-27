import {
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { logout } from "../../services/userServices";

const UserNavigationDropDown = () => {
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
              onClick={async () => {
                logout().then(()=>{ window.location.reload() })
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
