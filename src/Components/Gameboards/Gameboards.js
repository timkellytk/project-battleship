import React from 'react';
import { Space, Row } from 'antd';
import Board from './Board/Board';
import Gameboard from './Gameboard/Gameboard';

const Gameboards = () => (
  <Row justify="center">
    <Space size={50} align="center">
      <Board>
        <Gameboard />
      </Board>
      <Board>
        <Gameboard computer />
      </Board>
    </Space>
  </Row>
);

export default Gameboards;
