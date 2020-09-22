import React from 'react';
import {
  cellDimensions,
  backgroundColour,
  ItemTypes,
} from '../../Constants/Constants';
import { canMoveShip } from '../../Game/Game';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const StyledCell = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${cellDimensions - 2}px;
  width: ${cellDimensions - 2}px;
  background-color: ${(props) => {
    if (props.canDrop && props.isOver && !props.computer) {
      return 'rgba(340, 100, 51, 0.6)';
    }
    if (props.canDrop && !props.computer) {
      return 'rgba(51, 170, 51, 0.2)';
    }
    return backgroundColour;
  }};
  :hover {
    border: ${(props) =>
      props.startGame && props.computer ? '2px solid green;' : null};
    background-color: ${(props) =>
      props.startGame && props.computer ? 'rgba(51, 170, 51, 0.2)' : null};
    cursor: ${(props) =>
      props.startGame && props.computer ? 'pointer' : null};
  }
`;

const ClickedCell = styled(StyledCell)`
  font-size: ${cellDimensions}px;
  line-height: 0px;
  color: indianred;
  cursor: default;
  background-color: ${(props) =>
    props.sunk ? 'indianred' : 'rgb(211, 211, 211, 0.02)'};
`;

const StyledEmptyHit = styled.div`
  margin-bottom: 0.6em;
`;

const Cell = (props) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.SHIP,
    canDrop: (item) =>
      props.startGame ? false : canMoveShip(props.row, props.col, item.index),
    drop: (item) => props.moveShip(props.row, props.col, item.index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  let result = (
    <StyledCell
      ref={drop}
      canDrop={canDrop}
      isOver={isOver}
      computer={props.computer}
      onClick={props.clicked}
      startGame={props.startGame}
    >
      {props.children}
    </StyledCell>
  );
  if (props.hit === 'MISS') {
    result = (
      <ClickedCell>
        <StyledEmptyHit>.{props.children}</StyledEmptyHit>
      </ClickedCell>
    );
  }
  if (props.hit === 'HIT') {
    result = <ClickedCell>X{props.children}</ClickedCell>;
  }
  if (props.hit === 'SUNK') {
    result = <ClickedCell sunk>{props.children}</ClickedCell>;
  }
  return result;
};

export default Cell;
