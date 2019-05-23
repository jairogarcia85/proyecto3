import React, { Component } from "react";
import Title from "./Title";
import { FaCheckCircle } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCheckCircle />,
        title: "Scan",
        info: "Use  the camera of your phone"
      },
      {
        icon: <FaCheckCircle />,
        title: "Get into the site",
        info: "Fill the form and send"
      },
      {
        icon: <FaCheckCircle />,
        title: "Contact",
        info: "Keep in touch with the owner"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <h3>
          Create and Paste the code on your valuable things, then if somebody
          find your things, this is what they have to do.
        </h3>
        <br /> <br />
        <Title title="How the code works?" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
