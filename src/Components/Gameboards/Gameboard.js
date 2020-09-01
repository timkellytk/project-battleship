import React from 'react';
import { Card, Space, Row } from 'antd';

const Gameboards = () => (
  <Row justify="center">
    <Space size="large" align="center">
      <Card style={{ height: '400px', width: '400px' }}>Player Board</Card>
      <Card style={{ height: '400px', width: '400px' }}>Computer Board</Card>
    </Space>
  </Row>
);

export default Gameboards;
