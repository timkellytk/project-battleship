import React from 'react';
import { Button, Card, Space, Typography, Row } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Header = (props) => {
  const playButtons = (
    <Space>
      <Button type="primary" size="large" onClick={() => props.setPlay(true)}>
        Play Game
      </Button>
      <Button type="default" size="large">
        Randomise Ships
      </Button>
    </Space>
  );

  const infoPlayersTurn = (
    <Space>
      <UserOutlined style={{ fontSize: '1.6em', marginBottom: '6px' }} />
      <Title level={5}>Your turn</Title>
    </Space>
  );

  const infoComputersTurn = (
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

  const gameplay = (
    <Card>{props.playersTurn ? infoPlayersTurn : infoComputersTurn}</Card>
  );

  return (
    <Row justify="center">
      <Space direction="vertical" size="large" align="center">
        <Title level={1}>Battleship</Title>
        {props.play ? gameplay : playButtons}
      </Space>
    </Row>
  );
};

export default Header;
