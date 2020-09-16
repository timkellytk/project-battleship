import React from 'react';
import { Button, Card, Space, Typography, Row } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  TrophyTwoTone,
  DislikeTwoTone,
} from '@ant-design/icons';

const { Title } = Typography;

const Header = (props) => {
  const playButtons = (
    <Space>
      <Button
        type="primary"
        size="large"
        onClick={() => props.setStartGame(true)}
      >
        Play Game
      </Button>
      <Button type="default" size="large">
        Randomise Ships
      </Button>
    </Space>
  );

  const restartButton = (
    <Button type="primary" size="large" onClick={() => props.playAgain()}>
      Restart
    </Button>
  );

  const infoPlayerWins = (
    <Space>
      <TrophyTwoTone
        style={{
          fontSize: '1.6em',
          marginBottom: '6px',
        }}
      />
      <Title level={5}>You win!</Title>
    </Space>
  );

  const infoComputerWins = (
    <Space>
      <DislikeTwoTone
        style={{
          fontSize: '1.6em',
          marginBottom: '6px',
        }}
      />
      <Title level={5}>You lost</Title>
    </Space>
  );

  return (
    <Row justify="center">
      <Space direction="vertical" size="large" align="center">
        <Title level={1}>Battleship</Title>
        {props.winner === 'player' ? infoPlayerWins : null}
        {props.winner === 'computer' ? infoComputerWins : null}
        {props.startGame ? restartButton : playButtons}
      </Space>
    </Row>
  );
};

export default Header;
