import React, { useState } from 'react';
import { Space, Layout } from 'antd';
import Header from './Components/Header/Header';
import Gameboards from './Components/Gameboards/Gameboard';
import Footer from './Components/Footer/Footer';
import './App.less';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  return (
    <Layout>
      <div className="App">
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
      </div>
    </Layout>
  );
};

export default App;
