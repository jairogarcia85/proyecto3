import React, { Component } from "react";
import logo from "../images/help-me-get-back.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  state = {
    isOpen: false,
    isLogged: true
  };

  isLogged = () => {
    console.log(localStorage.getItem("user"));
    return localStorage.getItem("user", this.state.isLogged);
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    if (!this.isLogged()) {
      return (
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="wandrlustn" height="52px" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/register">Register </Link>
              </li>
              <li>
                <Link to="/login">Login </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="wandrlustn" height="52px" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/register">Contacto </Link>
              </li>
              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;
