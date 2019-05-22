import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import AuthService from "../../services/auth";
import toastr from "toastr";
import { withRouter } from "react-router-dom";

const service = new AuthService();

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        service
          .signup(values)
          .then(response => {
            console.log(response);
            toastr.success("User created");
            this.props.history.push("/");
          })
          .catch(err => {
            console.log(err);
            toastr.error("Something went wrong");
          });
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "52"
    })(
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="52">+52</Option>
        <Option value="86">+86</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Name&nbsp;
              <Tooltip title="Set your name or username">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Social network&nbsp;
              <Tooltip title="Set your social media networks">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("social", {
            rules: [
              {
                required: true,
                message: "Please input your social networks!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Country&nbsp;
              <Tooltip title="Set your country">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("country", {
            rules: [
              {
                required: true,
                message: "Please input your country!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator("telephone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="Website / Blog">
          {getFieldDecorator("website", {
            rules: [
              { required: false, message: "Please input your website/blog!" }
            ]
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website / blog"
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  RegistrationForm
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
