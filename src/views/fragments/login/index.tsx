import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";
import { setStore } from 'framework/utils/localStorage';
import './index.less'

interface IValues {
  username: string,
  password: string | number,
}

function Login() {
  const history = useHistory();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  function loginFun(values: IValues) {
    console.log('values', values);
    setStore('token', true);
    history.push('/home');
  }


  return <div className='loginContainer'>
    <div className='loginBox'>
      <h3 className='loginHeader'>用户登录</h3>
      <Form
        name="basic"
        className='loginForm'
        {...layout}
        onFinish={loginFun}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType='submit' block className='loginBtn'>
          登录
        </Button>
      </Form>
    </div>
  </div >
}

export default Login;