import React from "react";
import Signup from "../components/signup/Signup";
//import Banner from "../components/Banner";
//import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <section className="signupForm signup-box">
        <h2>Get your code</h2>
        <h4>Register</h4>
        <Signup />
      </section>
    </div>
  );
};

export default Register;
