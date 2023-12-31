import { IconType } from "react-icons";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
  active: boolean;
}
