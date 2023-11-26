import {
  FiCompass,
  FiHome,
  FiTrendingUp,
} from "react-icons/fi";
import { LinkItemProps } from "../../../props/linkitem";

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, route: "/",active: true },
  { name: "Games", icon: FiCompass, route: "/games",active: true  },
  { name: "Account", icon: FiTrendingUp, route: "/user",active: false  },
];

export default LinkItems;
