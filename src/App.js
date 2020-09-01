import React from 'react';
import { Button, Card, Space, Layout, Typography, Row, Col } from 'antd';
import { PushpinTwoTone } from '@ant-design/icons';

import './App.less';

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const App = () => {
  const Header = () => (
    <Row justify="center">
      <Space direction="vertical" size="large" align="center">
        <Title level={1}>Battleship</Title>
        <Space>
          <Button type="primary" size="large">
            Play Game
          </Button>
          <Button type="default" size="large">
            Randomise Ships
          </Button>
        </Space>
      </Space>
    </Row>
  );
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
