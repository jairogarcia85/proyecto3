import React, { Component } from "react";
import logo from "../images/help-me-get-back.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../App.css";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logout() {
    localStorage.removeItem("user");
  }

  render() {
    const isLogged = localStorage.getItem("user");
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
            {!isLogged && (
              <li>
                <Link to="/register">Register </Link>
              </li>
            )}
            <li>
              {!isLogged ? (
                <Link to="/login">Login </Link>
              ) : (
                <Link onClick={this.logout} to="/">
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
