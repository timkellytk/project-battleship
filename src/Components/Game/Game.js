import React, { useState, useEffect } from 'react';
import { Space, Layout, message } from 'antd';
import Header from '../Header/Header';
import Gameboards from '../Gameboards/Gameboards';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import Player from '../../Game/Player/Player';
import Computer from '../../Game/Player/Computer';
const _ = require('lodash');

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

// Game logic
let player;
let computer;

export const canMoveShip = (row, col, shipIndex) => {
  if (player.gameboard.canMoveShip(row, col, shipIndex)) {
    return true;
  }
  return false;
};

const Game = () => {
  const [gameboard, setGameboard] = useState([]);
  const [ships, setShips] = useState([]);
  const [computerShips, setComputerShips] = useState([]);
  const [attackGameboard, setAttackGameboard] = useState([]);
  const [start, setStart] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(false);

  const initialiseGame = () => {
    player = new Player();
    player.gameboard.intialiseShips();
    setGameboard(player.gameboard.getGameboard());
    setShips(player.gameboard.getShips());

    computer = new Computer();
    computer.gameboard.intialiseShips();
    setAttackGameboard(computer.gameboard.getGameboard());
    setComputerShips(computer.gameboard.getShips());

    setStart(false);
    setPlayerTurn(true);
    setWinner(false);
  };

  const handleStartGame = () => {
    setStart(true);
  };

  const handleRandomiseShips = () => {
    player.gameboard.randomiseShips();
    const updatedShips = _.cloneDeep(player.gameboard.getShips());
    setShips(updatedShips);
  };

  const handleMoveShip = (row, col, shipIndex) => {
    if (player.gameboard.moveShip(row, col, shipIndex)) {
      setShips(_.cloneDeep(player.gameboard.getShips()));
      return;
    }
    message.warning('Ships need to be surrounded by empty cells');
    return;
  };

  const handleToggleShip = (shipIndex) => {
    if (player.gameboard.toggleShip(shipIndex)) {
      setShips(_.cloneDeep(player.gameboard.getShips()));
      return true;
    }
    message.warning('Ships need to be surrounded by empty cells');
    return false;
  };

  const handlePlayerAttack = (col, row) => {
    const result = player.attack(col, row, computer);
    const updatedGameboard = _.cloneDeep(computer.gameboard.getGameboard());
    const updatedComputerShips = _.cloneDeep(computer.gameboard.getShips());
    setStart(true);
    setAttackGameboard(updatedGameboard);
    setComputerShips(updatedComputerShips);

    if (result === 'HIT' || result === 'SUNK') {
      if (computer.gameboard.gameover()) {
        return setWinner('player');
      }
      return;
    }
    setPlayerTurn(false);
    handleComputerAttack();
    return;
  };

  const handleComputerAttack = () => {
    const result = computer.attack(player);
    const updatedGameboard = _.cloneDeep(player.gameboard.getGameboard());
    setGameboard(updatedGameboard);
    if (result !== 'MISS') {
      if (player.gameboard.gameover()) {
        return setWinner('computer');
      }
      return handleComputerAttack();
    }
    setPlayerTurn(true);
    return;
  };

  useEffect(() => {
    initialiseGame();
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <Space direction="vertical" size="large" align="center">
          <Header
            startGame={start}
            playerTurn={playerTurn}
            winner={winner}
            ships={computerShips}
            toggleShip={handleToggleShip}
            moveShip={handleMoveShip}
            setStartGame={handleStartGame}
            randomiseShips={handleRandomiseShips}
            playAgain={initialiseGame}
          />
          <Gameboards
            startGame={start}
            player={gameboard}
            ships={ships}
            moveShip={handleMoveShip}
            toggleShip={handleToggleShip}
            computer={attackGameboard}
            attackComputer={handlePlayerAttack}
            winner={winner}
          />
          <Footer />
        </Space>
      </StyledWrapper>
    </Layout>
  );
};

export default Game;
