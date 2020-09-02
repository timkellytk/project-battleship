import React from 'react';
import { Card, Space, Row } from 'antd';
import Board from './Board/Board';

const Gameboards = () => (
  <Row justify="center">
    <Space size={50} align="center">
      <Board>
        <Card style={{ height: '400px', width: '400px' }}>Player Board</Card>
      </Board>
      <Board>
        <Card style={{ height: '400px', width: '400px' }}>Computer Board</Card>
      </Board>
    </Space>
  </Row>
);

export default Gameboards;
