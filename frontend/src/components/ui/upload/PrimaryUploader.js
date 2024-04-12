import { Space, Upload } from "antd";
import React from "react";
import BrannText from "../typo/Text";
import BrannPrimaryButton from "../button/PrimaryButton";

export default function BrannPrimaryUploader() {
  return (
    <Upload.Dragger>
      <Space wrap>
        <BrannText text="Klikk eller dra filer her" />
        <BrannPrimaryButton size="middle" label="Utforsk" />
      </Space>
    </Upload.Dragger>
  );
}
