import React, { Component } from "react";
import Qrcode from "./Qrcode";

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <Qrcode />
      </div>
    );
  }
}

export default Profile;
