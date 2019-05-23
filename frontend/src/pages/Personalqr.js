import React, { Component } from "react";
import Qrcode from "./Qrcode";
import logo from "../images/help-me-get-back.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="box-qr-section">
        <h1>Print your QR Card</h1>
        <div className="box-qr">
          <p>
            <img src={logo} alt="qr-code" />
          </p>
          <h3>Have you found my things?</h3>
          <br />
          <Qrcode
            url={`http://192.168.13.62:3001/${
              JSON.parse(localStorage.getItem("user"))._id
            }/contact-owner`}
          />
          <br />
          <br />
          <h3>Please, Scan and contact me!</h3>
          <p>http://helpmegetback.com</p>
        </div>
      </div>
    );
  }
}

export default Profile;
