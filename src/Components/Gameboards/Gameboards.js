import React from 'react';
import { Space, Row } from 'antd';
import Board from './Board/Board';
import Gameboard from './Gameboard/Gameboard';
import PropTypes from 'prop-types';

const Gameboards = (props) => {
  return (
    <Row justify="center">
      <Space size={50} align="center">
        <Board startGame={true}>
          <Gameboard
            startGame={props.startGame}
            gameboard={props.player}
            ships={props.ships}
            moveShip={props.moveShip}
            toggleShip={props.toggleShip}
          />
        </Board>
        <Board startGame={props.startGame}>
          <Gameboard
            startGame={props.startGame}
            gameboard={props.computer}
            handleClick={props.attackComputer}
            winner={props.winner}
            computer
          />
        </Board>
      </Space>
    </Row>
  );
};

Gameboards.propTypes = {
  startGame: PropTypes.bool.isRequired,
  winner: PropTypes.oneOf([false, 'player', 'computer']).isRequired,
  player: PropTypes.array.isRequired,
  ships: PropTypes.array.isRequired,
  computer: PropTypes.array.isRequired,
  moveShip: PropTypes.func.isRequired,
  toggleShip: PropTypes.func.isRequired,
  attackComputer: PropTypes.func.isRequired,
};

export default Gameboards;
