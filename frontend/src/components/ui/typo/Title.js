import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function BrannTitle({ text, align, color }) {
  return (
    <Title level={2} style={{ marginTop: 0, textAlign: align, color: color }}>
      {text}
    </Title>
  );
}
