import { IconType } from "react-icons";
import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { LinkItemProps } from "../../../props/linkitem";

const LinkItems: Array<LinkItemProps> = [
  { name: "Menu 1", icon: FiHome },
  { name: "Menu 2", icon: FiTrendingUp },
  { name: "Menu 3", icon: FiCompass },
  { name: "Menu 4", icon: FiStar },
  { name: "Menu 5", icon: FiSettings },
];

export default LinkItems;
