import { FlexProps } from "@chakra-ui/react";
import {
  BottomNavigation,
  BottomNavigationIcon,
  BottomNavigationItem,
  BottomNavigationLabel,
} from "chakra-ui-bottom-navigation";
import LinkItems from "../../utils/data/sidebar/menuitems";
import { useState } from "react";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [index, setIndex] = useState(0);
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
      {LinkItems.map((menu) => (
        <BottomNavigationItem>
          <BottomNavigationIcon as={menu.icon} color={"white"} />
          <BottomNavigationLabel
            fontSize={"xs"}
            color={"white"}
            fontWeight={"bold"}
          >
            {menu.name}
          </BottomNavigationLabel>
        </BottomNavigationItem>
      ))}
    </BottomNavigation>
  );
};

export default MobileNav;
