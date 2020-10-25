import React, { useContext } from "react";
import { Button, Form, Input, notification } from "antd";
import { useHistory } from "react-router-dom";
import * as Cookies from "js-cookie";
import { loginUser } from "../../requsts";
import AppContext from "../../context/AppContext.js";

const Login = () => {
  const history = useHistory();
  const { setAdmin } = useContext(AppContext);

  const onFinish = async ({ username }) => {
    try {
      const { ok } = await loginUser();
      if (!ok) {
        notification.error({
          message: "User not found",
          placement: "bottomLeft",
        });
        return;
      }
      history.push("/");

      Cookies.set("role", "admin", { expires: 1 });
      setAdmin(true);
      notification.success({
        message: `You entered as: ${username}`,
        placement: "bottomLeft",
      });
    } catch (e) {
      notification.error({
        message: "User not found",
        placement: "bottomLeft",
      });
    }
  };

  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
