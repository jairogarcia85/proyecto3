import React from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";
import Footer from "./components/Footer";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Router />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
