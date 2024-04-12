import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Form } from "antd";
import BrannInput from "components/ui/input/Input";
import { match, min, required, termsAgree, email } from "config/Validation";
import BrannPasswordInput from "components/ui/input/PasswordInput";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import actions from "states/auth/actions";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { isSigning, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    }
  }, [user, navigate])

  const onFinish = (values) => {
    dispatch({
      type: actions.SIGNUP,
      payload: values
    })
  };

  return (
    <Form className="auth-form" name="register-form" onFinish={onFinish}>
      <Form.Item name="name" rules={[required]}>
        <BrannInput placeholder="Your Name *" />
      </Form.Item>
      <Form.Item name="email" rules={[required, email]}>
        <BrannInput placeholder="Email *" />
      </Form.Item>
      <Form.Item name="password" rules={[required, min]} hasFeedback>
        <BrannPasswordInput placeholder="New password *" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        rules={[required, match]}
        hasFeedback
      >
        <BrannPasswordInput placeholder="Repeat password *" />
      </Form.Item>
      <Form.Item name="privacyTerms" valuePropName="checked" rules={[termsAgree]}>
        <Checkbox>
          Please confirm that you have read privacy purchase terms.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton loading={isSigning} label="Opprett konto" fullWidth />
      </Form.Item>
    </Form>
  );
}
