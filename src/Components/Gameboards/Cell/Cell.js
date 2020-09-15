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
  :hover {
    border: ${(props) => (props.computer ? '2px solid green;' : null)};
    background-color: ${(props) =>
      props.computer ? 'rgba(51, 170, 51, 0.2)' : null};
    cursor: ${(props) => (props.computer ? 'pointer' : null)};
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
  let result = <StyledCell computer={props.computer} onClick={props.clicked} />;
  if (props.hit === 'MISS') {
    result = (
      <ClickedCell>
        <StyledEmptyHit>.</StyledEmptyHit>
      </ClickedCell>
    );
  }
  if (props.hit === 'HIT') {
    result = <ClickedCell>X</ClickedCell>;
  }
  if (props.hit === 'SUNK') {
    result = <ClickedCell sunk />;
  }
  return result;
};

export default Cell;
