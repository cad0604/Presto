import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "antd";

import { email, required } from "config/Validation";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannInput from "components/ui/input/Input";
import BrannPasswordInput from "components/ui/input/PasswordInput";

import actions from "states/auth/actions";
import { useCookies } from "react-cookie";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isAuthenticating, user } = useSelector((state) => state.auth);
  const [cookies, setCookies] = useCookies(['token']);

  useEffect(() => {
    if (user !== null && user.token) {
      setCookies('token', user.token, { path: "/", maxAge: 86400 });
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user, cookies, setCookies])

  const onFinish = (values) => {
    dispatch({
      type: actions.LOGIN,
      payload: values,
    });
  };

  return (
    <Form className="auth-form" name="login-form" onFinish={onFinish}>
      <Form.Item name="email" rules={[required, email]}>
        <BrannInput placeholder="Email *" />
      </Form.Item>
      <Form.Item name="password" rules={[required]}>
        <BrannPasswordInput placeholder="Password *" />
      </Form.Item>

      <Form.Item>
        <BrannSubmitButton
          loading={isAuthenticating}
          fullWidth
          label="Login"
        />
      </Form.Item>
    </Form>
  );
}
