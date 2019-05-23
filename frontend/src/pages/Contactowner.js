import React, { Component } from "react";
import axios from "axios";
import logo from "../images/help-me-get-back.jpg";
// import "./App.css";

class Contactowner extends Component {
  state = {
    user: {},
    loading: true,
    response: "",
    email: {
      recipient: "",
      sender: "",
      subject: "",
      text: ""
    }
  };

  componentDidMount() {
    console.log(window.location.href.split("/").slice(-2, -1)[0]);
    axios
      .get(
        `https://hmgb.herokuapp.com/user/${
          window.location.href.split("/").slice(-2, -1)[0]
        }`
      )
      .then(response => {
        const { email } = response.data;
        const newEmail = { ...this.state.email };
        newEmail.recipient = email;
        this.setState({ response: response, email: newEmail, loading: false });
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email
    };

    axios
      .post(
        `http://192.168.1.167:3001/${
          JSON.parse(localStorage.getItem("user"))._id
        }`,
        { user }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="email-sender">
        {!this.state.loading && (
          <form onSubmit={this.handleSubmit}>
            <h2>My Information</h2>
            <br />
            <h3>Please, contact me.</h3>
            <br />
            <h4>Name: {this.state.response.data.name}</h4> <br />
            <h4>
              Email: <strong>{this.state.email.recipient}</strong>
            </h4>{" "}
            <br />
            <h4>Facebook: {this.state.response.data.social}</h4>
            <br /> <br />
            <p>
              <a href="http://helpmegetback">
                <img src={logo} alt="qr-code" />
              </a>
            </p>
          </form>
        )}
      </div>
    );
  }
}

export default Contactowner;

//
// axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
// .then(res => {
//   console.log(res);
//   console.log(res.data);
//   .catch(err => console.log(err))
// })
// sendEmail = _ => {
//   const { email } = this.state;
//   fetch(
//     `http://127.0.0.1:5000/send-email?recipient=${email.recipient}&sender=${
//       email.sender
//     }&topic=${email.subject}&text=${email.text}`
//   ) //query string url
//     .catch(err => console.error(err));
// };

// render() {
//   const { email } = this.state;
//   const spacer = {
//     margin: 10
//   };
//   const textArea = {
//     borderRadius: 4
//   };
//   console.log(this.props);
//   return (
//     <div className="email-sender">
//       <div style={{ marginTop: 10 }}>
//         <div style={spacer} />
//         <label> Sender </label>
//         <br />
//         <input
//           value={email.sender}
//           onChange={e =>
//             this.setState({ email: { ...email, sender: e.target.value } })
//           }
//         />
//         <div style={spacer} />
//         <label> Subject </label>
//         <br />
//         <input
//           value={email.subject}
//           onChange={e =>
//             this.setState({ email: { ...email, subject: e.target.value } })
//           }
//         />
//         <div style={spacer} />
//         <label> Message </label>
//         <br />
//         <textarea
//           rows={3}
//           value={email.text}
//           style={textArea}
//           onChange={e =>
//             this.setState({ email: { ...email, text: e.target.value } })
//           }
//         />
//         <div style={spacer} />
//         <button onClick={this.sendEmail}> Send Email </button>
//       </div>
//     </div>
//   );
// }
