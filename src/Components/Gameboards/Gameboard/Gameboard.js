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
  const cells = props.gameboard.map((col, colIndex) =>
    col.map((row, rowIndex) => {
      return (
        <Cell
          hit={row}
          key={colIndex + rowIndex}
          computer={props.computer}
          clicked={() => props.handleClick(colIndex, rowIndex)}
        />
      );
    })
  );

  return <StyledGameboard>{cells}</StyledGameboard>;
};

export default Gameboard;
