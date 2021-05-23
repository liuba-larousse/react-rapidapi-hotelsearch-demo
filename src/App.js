import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";
import "./styles.css";
import Home from "./components/Home/Index";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import SearchPage from "./components/SearchPage/Index";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
