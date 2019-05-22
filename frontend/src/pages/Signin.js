import React from "react";
import Login from "../components/login/Login";
//import Banner from "../components/Banner";
//import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <section className="loginForm">
        <h2>Log in</h2>
        <h4>Is everything ok?</h4>
        <Login />
      </section>
    </div>
  );
};

export default Signin;
