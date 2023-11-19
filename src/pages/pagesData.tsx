import Account from "../components/account";
import { routerType } from "../types/router.types";
import Home from "./main/home";
import Profile from "./main/profile";
const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home"
  },
  {
    path:'user',
    element: <Profile/>,
    title:'profile'
  }
];

export default pagesData;