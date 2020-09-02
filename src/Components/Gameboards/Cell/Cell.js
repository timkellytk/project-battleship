import React from 'react';
import { cellDimensions, borderColour } from '../../Constants/Constants';
import styled from 'styled-components';

const StyledCell = styled.div`
  height: ${cellDimensions - 2}px;
  width: ${cellDimensions - 2}px;
  border-top: 1px solid ${borderColour};
  border-left: 1px solid ${borderColour};
`;

const Cell = () => <StyledCell />;

export default Cell;
