import React from "react";
import { Col, Row, Typography } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";

export default function Dashboard() {
    const token = JSON.parse(localStorage.getItem('user')).token;

    return (
        <AppLayout>
            <Row gutter={[0, 32]}>
                <Col span={24}>
                    <Row justify="space-between" align="bottom">
                        <Col>
                            <BrannTitle text={`Dashboard Page`} />
                            <Typography.Text>                                
                                {`Hei ${token}`}
                            </Typography.Text>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AppLayout>
    );
}
