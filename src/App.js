import React, { useState } from 'react';
import { Space, Layout } from 'antd';
import Header from './Components/Header/Header';
import Gameboards from './Components/Gameboards/Gameboard';
import Footer from './Components/Footer/Footer';
import './App.less';

const App = () => {
  const [play, setPlay] = useState(false);
  const [playersTurn] = useState(true);

  return (
    <Layout>
      <div className="App">
        <Space direction="vertical" size="large" align="center">
          <Header
            play={play}
            playersTurn={!playersTurn}
            setPlay={(bool) => setPlay(bool)}
          />
          <Gameboards />
          <Footer />
        </Space>
      </div>
    </Layout>
  );
};

export default App;
