/* eslint-disable react/jsx-no-undef */
import {
  FlexProps,
  Hide,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BottomNavigation,
  BottomNavigationIcon,
  BottomNavigationItem,
  BottomNavigationLabel,
} from "chakra-ui-bottom-navigation";
import LinkItems from "../../utils/data/sidebar/menuitems";
import { useState } from "react";
import { useNavigate } from "react-router";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [index, setIndex] = useState(0);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <BottomNavigation
      value={index}
      onChange={(newIndex: number) => {
        setIndex(newIndex);
      }}
      p={2}
      bgColor={"#1A2C38"}
      variant="float"
      showLabel="if-active"
      display={"flex"}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent margin={3} padding={2}>
          <ModalHeader textAlign={"center"}>Sign in required</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} fontWeight={"semibold"} mb={5}>
            Please sign in to go to your account page
          </ModalBody>
        </ModalContent>
      </Modal>
      {LinkItems.map((menu) => (
        <BottomNavigationItem
          onClick={() => {
            if (menu.active === false && !localStorage.getItem("token")) {
              onToggle();
            } else {
              navigate(menu.route);
            }
          }}
          width="60%"
        >
          <BottomNavigationIcon boxSize={4} as={menu.icon} color={"white"} />
          <BottomNavigationLabel
            fontSize={"xs"}
            color={"white"}
            // fontWeight={"bold"}
          >
            {menu.name}
          </BottomNavigationLabel>
        </BottomNavigationItem>
      ))}
    </BottomNavigation>
  );
};

export default MobileNav;
