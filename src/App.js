import React, { useState } from 'react';
import { Space, Layout } from 'antd';
import Header from './Components/Header/Header';
import Gameboards from './Components/Gameboards/Gameboard';
import Footer from './Components/Footer/Footer';
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
  const [playersTurn, setPlayersTurn] = useState(true);
  const [winner, setWinner] = useState(null);

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
          <Gameboards setPlayersTurn={(bool) => setPlayersTurn(bool)} />
          <Footer />
        </Space>
      </StyledWrapper>
    </Layout>
  );
};

export default App;
