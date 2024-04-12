import React from "react";
import { Image, Space } from "antd";
import LogoImage from "assets/images/logo.svg";

export default function BrannLogo({ size = 46, justify = "center" }) {
  const spaceProps = {
    align: "center",
    block: "true",
    style: { justifyContent: justify, width: "100%", padding: "0 24px" },
  };

  const imageProps = {
    height: size,
    alt: "Digitalbrann",
    preview: false,
  };

  return (
    <Space {...spaceProps}>
      <Image src={LogoImage} {...imageProps} />
    </Space>
  );
}
