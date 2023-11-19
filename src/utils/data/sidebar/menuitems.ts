import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { LinkItemProps } from "../../../props/linkitem";

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, route: "/" },
  { name: "Menu 2", icon: FiTrendingUp, route: "/" },
  { name: "Menu 3", icon: FiCompass, route: "/" },
  { name: "Menu 4", icon: FiStar, route: "/" },
  { name: "Menu 5", icon: FiSettings, route: "/" },
];

export default LinkItems;
