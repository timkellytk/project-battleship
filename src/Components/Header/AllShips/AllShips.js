import React from 'react';
import { Space, Typography } from 'antd';
import Ship from '../../Gameboards/Ship/Ship';

const { Title } = Typography;

const AllShips = (props) => {
  const ships = props.ships.map((ship) => (
    <Ship length={ship.length} sunk={ship.isSunk()} showcase />
  ));
  return (
    <div>
      <Title level={5}>Enemy Ships</Title>
      <Space>{ships}</Space>
    </div>
  );
};

export default AllShips;
