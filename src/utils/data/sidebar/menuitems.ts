
import { FaRegUser,FaGamepad,FaHome } from "react-icons/fa";
import { LinkItemProps } from "../../../props/linkitem";

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FaHome, route: "/",active: true },
  { name: "Games", icon: FaGamepad, route: "/games",active: true  },
  { name: "Account", icon: FaRegUser, route: "/user",active: false  },
];

export default LinkItems;
