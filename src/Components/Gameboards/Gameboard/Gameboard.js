import React from 'react';
import Cell from '../Cell/Cell';
import Ship from '../Ship/Ship';
import { borderColour } from '../../Constants/Constants';
import styled from 'styled-components';

const StyledGameboard = styled.div`
  position: relative;
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
      const emptyCell = (
        <Cell
          hit={row}
          key={colIndex + rowIndex}
          computer={props.computer}
          clicked={
            props.computer ? () => props.handleClick(colIndex, rowIndex) : null
          }
        />
      );

      let shipStartsOnCell = false;
      let shipCell;

      if (props.ships) {
        shipStartsOnCell = props.ships.find(
          (ship) =>
            ship.startCoordinate.col === colIndex &&
            ship.startCoordinate.row === rowIndex
        );
        if (shipStartsOnCell) {
          shipCell = (
            <Cell>
              <Ship
                orientation={shipStartsOnCell.orientation}
                length={shipStartsOnCell.length}
                coordinates={shipStartsOnCell.getCoordinates()}
              />
            </Cell>
          );
        }
      }

      return shipStartsOnCell ? shipCell : emptyCell;
    })
  );

  return <StyledGameboard>{cells}</StyledGameboard>;
};

export default Gameboard;
