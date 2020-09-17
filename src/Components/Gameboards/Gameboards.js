import React from 'react';
import { Space, Row } from 'antd';
import Board from './Board/Board';
import Gameboard from './Gameboard/Gameboard';

const Gameboards = (props) => {
  return (
    <Row justify="center">
      <Space size={50} align="center">
        <Board startGame={true}>
          <Gameboard
            gameboard={props.player}
            ships={props.ships}
            currentShipIndex={props.currentShipIndex}
            setCurrentShip={props.setCurrentShip}
            startGame={props.startGame}
          />
        </Board>
        <Board startGame={props.startGame}>
          <Gameboard
            gameboard={props.computer}
            handleClick={props.attackComputer}
            startGame={props.startGame}
            winner={props.winner}
            computer
          />
        </Board>
      </Space>
    </Row>
  );
};

export default Gameboards;
