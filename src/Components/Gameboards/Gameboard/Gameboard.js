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

const Gameboard = (props) => {
  const cells = [];
  Object.keys(props.board).forEach((column) => {
    Object.keys(props.board[column]).forEach((row) => {
      const { hit, ship } = props.board[column][row];
      cells.push(
        <Cell
          computer={props.computer}
          hit={hit}
          ship={ship}
          sunk={ship ? ship.sunk() : null}
          key={column + row}
        />
      );
    });
  });

  return <StyledGameboard>{cells}</StyledGameboard>;
};

export default Gameboard;
