import Account from "../components/account";
import { routerType } from "../types/router.types";
import Game from "./main/game";
import Games from "./main/games";
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
  },
  {
    path: "games",
    element: <Games />,
    title: "game"
  },
  {
    path: "game/:id",
    element: <Game />,
    title: "game"
  },
 
];

export default pagesData;