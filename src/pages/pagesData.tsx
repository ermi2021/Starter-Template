import { routerType } from "../types/router.types";
import Home from "./main/home";
import SignUp from "./auth/signup";
import Login from "./auth/login";
const pagesData: routerType[] = [
  {
    path: "",
    element: <Login />,
    title: "signin"
  },
  {
    path: "signup",
    element: <SignUp />,
    title: "about"
  },
  {
    path: "home",
    element: <Home />,
    title: "home"
  }
];

export default pagesData;