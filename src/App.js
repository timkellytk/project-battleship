import React, { useState } from 'react';
import { Space, Layout } from 'antd';
import Header from './Components/Header/Header';
import Gameboards from './Components/Gameboards/Gameboards';
import Footer from './Components/Footer/Footer';
import createPlayer from './Game/Player/Player';
import createComputer from './Game/Player/Computer';
import styled from 'styled-components';
import './App.less';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [player, setPlayer] = useState(createPlayer());
  const [computer, setComputer] = useState(createComputer());
  const [playersTurn, setPlayersTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const attackComputerHandler = (col, row) => {
    const updatedComputer = player.attack(col, row, computer);
    setComputer(updatedComputer);
    setPlayersTurn(false);
  };

  const attackPlayerHandler = () => {
    const updatedPlayer = computer.attack(player);
    setPlayer(updatedPlayer);
    setPlayersTurn(true);
  };

  // If playersTurn is true
  if (playersTurn) {
    // Wait for player attack
  } else {
    // Else computer attack
    attackPlayerHandler();
  }

  return (
    <Layout>
      <StyledWrapper>
        <Space direction="vertical" size="large" align="center">
          <Header
            startGame={startGame}
            setStartGame={(bool) => setStartGame(bool)}
            playersTurn={playersTurn}
            winner={winner}
          />
          <Gameboards
            startGame={startGame}
            player={player.gameboard}
            computer={computer.gameboard}
            attackComputer={(col, row) => attackComputerHandler(col, row)}
          />
          <Footer />
        </Space>
      </StyledWrapper>
    </Layout>
  );
};

export default App;
