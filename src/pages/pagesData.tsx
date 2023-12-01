import { routerType } from "../types/router.types";
import Game from "./main/game";
import Games from "./main/games";
import Home from "./main/home";
import Profile from "./main/profile";
import GamePlay from "./main/gamePlay";

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
  {
    path: "game/play/:name",
    element: <GamePlay />,
    title: "game play"
    
  },
];

export default pagesData;