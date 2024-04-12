import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Col, Layout, Row } from "antd";

import { useMobileViewport } from "utils/responsive";

export default function AuthLayout({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isMobileView = useMobileViewport();

  useEffect(() => {
    if (isAuthenticated) {
        navigate("/dashboard");
    }

  }, [isAuthenticated, user, navigate]);

  return (
    <Layout className="auth-layout">
      <Layout.Content>
        <Row className="container">
          {!isMobileView && (
            <Col span={12} className="banner">
            </Col>
          )}
          <Col sm={24} xs={24} md={12} className="content">
            {children}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
