import React, { useState, useEffect } from 'react';
import { Space, Layout } from 'antd';
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

const Game = () => {
  const [gameboard, setGameboard] = useState([]);
  const [ships, setShips] = useState([]);
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

    setStart(false);
    setPlayerTurn(true);
    setWinner(false);
  };

  const handleStartGame = () => {
    setStart(true);
  };

  const handlePlayerAttack = (col, row) => {
    const hitShip = player.attack(col, row, computer);
    const updatedGameboard = _.cloneDeep(computer.gameboard.getGameboard());
    setAttackGameboard(updatedGameboard);
    if (!hitShip) {
      if (computer.gameboard.gameover()) {
        return setWinner('player');
      }
      setPlayerTurn(false);
      handleComputerAttack();
    }
    return;
  };

  const handleComputerAttack = () => {
    const hitShip = computer.attack(player);
    const updatedGameboard = _.cloneDeep(player.gameboard.getGameboard());
    setGameboard(updatedGameboard);
    if (hitShip) {
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
            setStartGame={handleStartGame}
            playerTurn={playerTurn}
            winner={winner}
            playAgain={initialiseGame}
          />
          <Gameboards
            player={gameboard}
            ships={ships}
            computer={attackGameboard}
            attackComputer={handlePlayerAttack}
          />
          <Footer />
        </Space>
      </StyledWrapper>
    </Layout>
  );
};

export default Game;