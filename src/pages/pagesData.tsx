import { routerType } from "../types/router.types";
import Home from "./main/home";
import SignUp from "./auth/signup";
import Login from "./auth/login";
import Profile from "./main/profile";
const pagesData: routerType[] = [
  {
    path: "",
    element: <Login />,
    title: "signin"
  },
  {
    path: "signup",
    element: <SignUp />,
    title: "signup"
  },
  {
    path: "home",
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