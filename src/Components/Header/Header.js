import React from 'react';
import AllShips from './AllShips/AllShips';
import { Button, Space, Typography, Row } from 'antd';
import { TrophyTwoTone, DislikeTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';

const { Title, Paragraph } = Typography;

const Header = (props) => {
  const playButtons = (
    <Space>
      <Button type="primary" size="large" onClick={props.setStartGame}>
        Play Game
      </Button>
      <Button type="ghost" size="large" onClick={props.randomiseShips}>
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

  const gameInstructions = (
    <>
      <Paragraph style={{ width: '350px', textAlign: 'center' }}>
        Drag and drop your ships to move their location. Click ships to toggle
        vertical or horizontal direction. Sink all of the enemy battleships to
        win the game.
      </Paragraph>
    </>
  );

  return (
    <Row justify="center">
      <Space direction="vertical" size="large" align="center">
        <Title level={1}>Battleship</Title>
        {props.winner === 'player' ? infoPlayerWins : null}
        {props.winner === 'computer' ? infoComputerWins : null}
        {props.startGame ? <AllShips ships={props.ships} /> : gameInstructions}
        {props.startGame ? restartButton : playButtons}
      </Space>
    </Row>
  );
};

Header.propTypes = {
  startGame: PropTypes.bool.isRequired,
  winner: PropTypes.oneOf([false, 'computer', 'player']),
  ships: PropTypes.array.isRequired,
  setStartGame: PropTypes.func.isRequired,
  randomiseShips: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
};

export default Header;
