import React from "react";
import interceptor from "./services/interceptor";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "./components/wrapper";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <Wrapper>
            <Router />
          </Wrapper>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
