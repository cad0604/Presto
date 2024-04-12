import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "states/store";

import { ConfigProvider } from "antd";
import { AntConfigProps } from "config/AntConfig";
import "assets/css/app.scss";

import App from "App";

if (document.getElementById("root")) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <ConfigProvider {...AntConfigProps}>
        <App />
      </ConfigProvider>
    </Provider>
  );
}
