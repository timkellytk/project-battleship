import React, { useState } from 'react';
import { Button, Card, Space, Layout, Typography, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

import './App.less';

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

const App = () => {
  const [play, setPlay] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(true);

  const Header = () => {
    let Instructions = () => (
      <Space>
        <Button type="primary" size="large" onClick={() => setPlay(true)}>
          Play Game
        </Button>
        <Button type="default" size="large">
          Randomise Ships
        </Button>
      </Space>
    );
    if (play) {
      Instructions = () => {
        let information = (
          <Space>
            <UserOutlined style={{ fontSize: '1.6em', marginBottom: '6px' }} />
            <Title level={5}>Your turn</Title>
          </Space>
        );
        if (!playersTurn) {
          information = (
            <Space>
              <LaptopOutlined
                style={{
                  fontSize: '1.6em',
                  marginBottom: '6px',
                }}
              />
              <Title level={5}>Computer's turn</Title>
            </Space>
          );
        }

        return <Card>{information}</Card>;
      };
    }
    return (
      <Row justify="center">
        <Space direction="vertical" size="large" align="center">
          <Title level={1}>Battleship</Title>
          <Instructions />
        </Space>
      </Row>
    );
  };

  const Gameboards = () => (
    <Row justify="center">
      <Space size="large" align="center">
        <Card style={{ height: '400px', width: '400px' }}>Player Board</Card>
        <Card style={{ height: '400px', width: '400px' }}>Computer Board</Card>
      </Space>
    </Row>
  );

  const GameFooter = () => (
    <Footer style={{ textAlign: 'center' }}>
      <Paragraph>
        Created by <a href="https://github.com/timkellytk">Tim Kelly</a> for The
        Odin Project
      </Paragraph>
    </Footer>
  );

  return (
    <Layout>
      <div className="App">
        <Space direction="vertical" size="large" align="center">
          <Header />
          <Gameboards />
          <GameFooter />
        </Space>
      </div>
    </Layout>
  );
};

export default App;
