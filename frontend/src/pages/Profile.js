import React, { Component } from "react";
//import Qrcode from "./Qrcode";
import { Link } from "react-router-dom";
import logo from "../images/help-me-get-back.jpg";

class User extends Component {
  state = {
    user: {}
  };

  isLogged = () => {
    return localStorage.getItem("user");
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));

    this.setState({ user });
  }

  render() {
    const { name, email, telephone, social, country } = this.state.user;
    console.log(this.props);
    if (this.isLogged) {
      return (
        <div className="box-profile">
          <div>
            <p>
              <br />
              <img src={logo} alt="qr-code" />
            </p>
            <p />
            <h2>Personal Information</h2>
            <br />
            <h3>Name: {name}</h3>
            <br />
            <h3>Email: {email}</h3>
            <br />
            <h3>Phone: {telephone}</h3>
            <br />
            <h3>Facebook: {social}</h3>
            <br />
            <h3>Pais: {country}</h3>
            <br />
          </div>
          <h2>
            <Link to="/Personalqr">Ger your Personal QR</Link>
          </h2>
        </div>
      );
    } else {
      return (
        <Link to={`/${this.props.match.params.id}/contact-owner`}>
          Contactar al dueño
        </Link>
      );
    }
  }
}

export default User;
