import { Input } from "antd";
import React from "react";

export default function BrannIconInput({
  icon,
  placeholder,
  width = "100%",
  ...rest
}) {
  return (
    <Input
      prefix={icon}
      placeholder={placeholder}
      style={{ width: width }}
      size="large"
      {...rest}
    />
  );
}
