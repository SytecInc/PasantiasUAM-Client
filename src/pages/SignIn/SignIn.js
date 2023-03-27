import React from 'react'
import './SignIn.scss'
import { Form, Input, Checkbox, Button } from 'antd';
import { logIn } from "../../services/jwt";
const { Item } = Form;
const { Password } = Input;

export const SignIn = () => {
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className="login-box">
      <div className="login-wrapper">
        <img src={require("../../assets/img/png/Logos_UAM-08.png")} alt="Login"/>
      </div>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={logIn}
        onFinishFailed={onFinishFailed}
      >
        <p className="form-title">Welcome back</p>
        <p>Login to the Dashboard</p>
        <Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            placeholder="Username"
          />
        </Item>

        <Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Password 
            placeholder="Password"
          />
        </Item>

        <Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Item>

        <Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            LOGIN
          </Button>
        </Item>
      </Form>
    </div>
  )
}
