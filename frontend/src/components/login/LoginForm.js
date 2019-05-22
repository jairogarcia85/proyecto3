import React from "react";
import { Form, Icon, Input, Button } from "antd";
import AuthService from "../../services/auth";
import toastr from "toastr";
import { withRouter } from "react-router-dom";

const service = new AuthService();

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service
          .login(values)
          .then(response => {
            console.log(response);
            if (response.err === "Password incorrect") throw new Error("Error");
            toastr.success("You are logged in");
            localStorage.setItem("user", JSON.stringify(response.data));
            this.props.history.push(`/user/${response.data._id}`);
          })
          .catch(err => {
            console.log(err);
            toastr.error("Something went wrong, check your information");
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default withRouter(WrappedNormalLoginForm);

// import React from 'react'

// function LoginForm({ handleInputs, handleSubmit }) {
//   return (
//     <div>
//       <input type="email" name="email" onChange={handleInputs} />
//       <input type="password" name="password" onChange={handleInputs} />
//       <button onClick={handleSubmit}>Login</button>
//     </div>
//   )
// }

// export default LoginForm
