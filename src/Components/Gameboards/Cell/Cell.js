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

const NullCell = styled(StyledCell)`
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

const StyledDot = styled.div`
  margin-bottom: 0.6em;
`;

const Empty = () => (
  <ClickedCell>
    <StyledDot>.</StyledDot>
  </ClickedCell>
);
const Ship = (props) =>
  props.sunk ? <ClickedCell sunk>X</ClickedCell> : <ClickedCell>X</ClickedCell>;

const HitCell = (props) =>
  props.ship ? <Ship sunk={props.sunk} /> : <Empty />;

const Cell = (props) => {
  return props.hit ? <HitCell {...props} /> : <NullCell />;
};

export default Cell;
