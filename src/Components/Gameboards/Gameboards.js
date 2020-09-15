import React from 'react';
import { Space, Row } from 'antd';
import Board from './Board/Board';
import Gameboard from './Gameboard/Gameboard';

const Gameboards = (props) => {
  return (
    <Row justify="center">
      <Space size={50} align="center">
        <Board>
          <Gameboard gameboard={props.player} ships={props.ships} />
        </Board>
        <Board>
          <Gameboard
            gameboard={props.computer}
            handleClick={props.attackComputer}
            computer
          />
        </Board>
      </Space>
    </Row>
  );
};

export default Gameboards;
