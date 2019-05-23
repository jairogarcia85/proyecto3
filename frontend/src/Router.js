import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Signup from "./components/signup/Signup";
import Register from "./pages/Register";
import SingleRoom from "./pages/SingleRoom";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Personalqr from "./pages/Personalqr";
import Contactowner from "./pages/Contactowner";
import { PrivateRoute } from "./components/PrivateRoute";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/:slug" component={SingleRoom} />
      <Route exact path="/login" component={Signin} />
      <PrivateRoute exact path="/user/:id" component={Profile} />
      <PrivateRoute exact path="/personalqr" component={Personalqr} />
      <Route exact path="/:id/contact-owner" component={Contactowner} />
      <Route component={Error} />
    </Switch>
  );
};

export default Router;
