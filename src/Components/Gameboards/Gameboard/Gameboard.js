import React from 'react';
import Cell from '../Cell/Cell';
import { borderColour } from '../../Constants/Constants';
import styled from 'styled-components';

const StyledGameboard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 1px;
  background-color: ${borderColour};
  border: 1px solid ${borderColour};
`;

const Gameboard = (props) => (
  <StyledGameboard>
    <Cell />
    <Cell hit ship sunk />
    <Cell computer={props.computer} hit ship />
    <Cell computer={props.computer} hit ship sunk />
    <Cell computer={props.computer} />
    <Cell />
    <Cell />
    <Cell hit />
    <Cell />
    <Cell hit />
    <Cell />
    <Cell ship hit computer={props.computer} />
    <Cell ship computer={props.computer} />
    <Cell ship computer={props.computer} />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
  </StyledGameboard>
);

export default Gameboard;
