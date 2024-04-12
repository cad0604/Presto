import React from "react";

import { Layout } from "antd";
import { useMobileViewport } from "utils/responsive";

import BrannSider from "components/common/Sider";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  const isMobileView = useMobileViewport();

  return (
    <Layout className="app-layout">
      {!isMobileView && <BrannSider />}
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
