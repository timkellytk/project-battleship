import React from 'react';
import { Space, Row } from 'antd';
import Board from './Board/Board';
import Gameboard from './Gameboard/Gameboard';

const Gameboards = (props) => (
  <Row justify="center">
    <Space size={50} align="center">
      <Board>
        <Gameboard board={props.player} />
      </Board>
      <Board>
        <Gameboard board={props.computer} computer />
      </Board>
    </Space>
  </Row>
);

export default Gameboards;
