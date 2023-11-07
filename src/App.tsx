import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
