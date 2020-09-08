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
  for (let i = 0; i < 100; i++) {
    cells.push(
      <Cell
        computer={props.computer}
        hit={null}
        ship={null}
        sunk={null}
        clicked={null}
        key={null}
      />
    );
  }
  return <StyledGameboard>{cells}</StyledGameboard>;
};

export default Gameboard;
