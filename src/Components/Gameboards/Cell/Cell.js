import React from 'react';
import { cellDimensions, backgroundColour } from '../../Constants/Constants';
import styled from 'styled-components';

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${cellDimensions - 2}px;
  width: ${cellDimensions - 2}px;
  background-color: ${backgroundColour};
`;

const PlayerShip = styled(StyledCell)`
  background-color: #197ddc;
`;

const ComputerCell = styled(StyledCell)`
  :hover {
    border: 2px solid green;
    background-color: rgba(51, 170, 51, 0.2);
    cursor: pointer;
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

const PlayerCell = (props) => (props.ship ? <PlayerShip /> : <StyledCell />);

const EmptyHit = () => (
  <ClickedCell>
    <StyledEmptyHit>.</StyledEmptyHit>
  </ClickedCell>
);

const ShipHit = (props) =>
  props.sunk ? <ClickedCell sunk>X</ClickedCell> : <ClickedCell>X</ClickedCell>;

const HitCell = (props) =>
  props.ship ? <ShipHit sunk={props.sunk} /> : <EmptyHit />;

const NullCell = (props) =>
  props.computer ? (
    <ComputerCell onClick={props.clicked} />
  ) : (
    <PlayerCell ship={props.ship} />
  );

const Cell = (props) => {
  return props.hit ? <HitCell {...props} /> : <NullCell {...props} />;
};

export default Cell;
