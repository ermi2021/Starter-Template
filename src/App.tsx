import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { ChakraProvider } from "@chakra-ui/react";
import interceptor from "./services/interceptor"

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
