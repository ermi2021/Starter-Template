import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import { accountService } from "../services/accountService";

const Router = () => {
  setInterval(async () => {
    await accountService()
    // set reducer data in the service here
  }, 20000)

  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
