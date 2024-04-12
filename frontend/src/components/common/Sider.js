import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Layout, Menu } from "antd";
import {
  faDashboard,
  faSignOut,

} from "@fortawesome/free-solid-svg-icons";
import BrannLogo from "components/common/Logo";
import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";
import actions from "states/auth/actions";

const { Sider } = Layout;

export default function BrannSider() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [currentMenuItem, setCurrentMenuItem] = useState("/dashboard");
  const token = JSON.parse(localStorage.getItem('user')).token;

  useEffect(() => {
    if (location.pathname.includes("dashboard")) {
      setCurrentMenuItem("/dashboard");
    }
  }, [location.pathname]);


  const onClickMenuItem = (e) => {
    if (e.key === "/loggut") {
      dispatch({
        type: actions.LOGOUT,
        payload: token
      });
      localStorage.removeItem('user');
      window.location.href = '/'
    } else {
      navigate(e.key);
    }
  };

  const items = [
    {
      key: "/dashboard",
      icon: <BrannIcon icon={faDashboard} size={16} />,
      label: "Dashboard",
    },
    {
      key: "/loggut",
      icon: <BrannIcon icon={faSignOut} size={16} />,
      label: "Logg ut",
    },
  ];

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          return func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);
  const [stateOpenKeys, setStateOpenKeys] = useState([]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Sider width={400} theme="light">
      <View className="brann-logo-wrapper">
        <BrannLogo justify="flex-start" />
      </View>
      <Menu
        onClick={onClickMenuItem}
        items={items}
        theme="dark"
        mode="inline"
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[currentMenuItem]}
        style={{ fontSize: 16, color: '#FFFFFF' }}
      />
    </Sider>
  );
}
