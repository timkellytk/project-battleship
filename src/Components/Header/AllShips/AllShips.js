import React from 'react';
import { Space, Typography } from 'antd';
import Ship from '../../Gameboards/Ship/Ship';
import PropTypes from 'prop-types';

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

AllShips.propTypes = {
  ships: PropTypes.array.isRequired,
};

export default AllShips;
