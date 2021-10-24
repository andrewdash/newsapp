import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <ChakraProvider>
        <Header/>
        <NewsFeed/>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
