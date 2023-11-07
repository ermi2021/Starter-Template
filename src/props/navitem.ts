import { FlexProps } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
