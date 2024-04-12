import React from "react";
import { Typography } from "antd";

export default function BrannLink({ href, children, underline = false }) {
  return (
    <Typography.Link href={href} className="brann-link" underline={underline}>
      {children}
    </Typography.Link>
  );
}
