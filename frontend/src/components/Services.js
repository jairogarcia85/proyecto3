import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Get a Code",
        info: "It's easy and free"
      },
      {
        icon: <FaHiking />,
        title: "Paste the label",
        info: "Paste or set as wallpaper"
      },
      {
        icon: <FaShuttleVan />,
        title: "Scan",
        info: "Scan the code with your phone"
      },
      {
        icon: <FaBeer />,
        title: "Access code",
        info: "Fill the field with the Code"
      },
      {
        icon: <FaHiking />,
        title: "Test",
        info: "Send to yourself an email"
      },
      {
        icon: <FaShuttleVan />,
        title: "Check your email",
        info: "Be sure you are getting an email"
      }
    ]
  };
  render() {
    return (
      <section className="services">
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
