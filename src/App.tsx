import React from "react";
import interceptor from "./services/interceptor"
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Wrapper>
          <Router />
        </Wrapper>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
