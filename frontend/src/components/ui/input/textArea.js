import { Input } from "antd";
import React from "react";
const { TextArea } = Input;

export default function BrannTextArea({ placeholder, disable, ...rest }) {
  return <TextArea placeholder={placeholder} disabled={disable} rows={4} size="large" {...rest} />;
}
