import React from 'react';
import { boardDimensions, cellDimensions } from '../../Constants/Constants';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBoardWrapper = styled.div`
  display: grid;
  width: ${boardDimensions}px;
  grid-template: ${cellDimensions}px 1fr / ${cellDimensions}px 1fr;
  opacity: ${(props) => (props.startGame ? '100%' : '50%')};
`;

const StyledNumbersColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-column: 1;
  grid-row: 2;
`;

const StyledLettersColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 2;
`;

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const Board = (props) => (
  <StyledBoardWrapper startGame={props.startGame}>
    <StyledLettersColumn>
      <StyledCell>A</StyledCell>
      <StyledCell>B</StyledCell>
      <StyledCell>C</StyledCell>
      <StyledCell>D</StyledCell>
      <StyledCell>E</StyledCell>
      <StyledCell>F</StyledCell>
      <StyledCell>G</StyledCell>
      <StyledCell>H</StyledCell>
      <StyledCell>I</StyledCell>
      <StyledCell>J</StyledCell>
    </StyledLettersColumn>
    <StyledNumbersColumn>
      <StyledCell>1</StyledCell>
      <StyledCell>2</StyledCell>
      <StyledCell>3</StyledCell>
      <StyledCell>4</StyledCell>
      <StyledCell>5</StyledCell>
      <StyledCell>6</StyledCell>
      <StyledCell>7</StyledCell>
      <StyledCell>8</StyledCell>
      <StyledCell>9</StyledCell>
      <StyledCell>10</StyledCell>
    </StyledNumbersColumn>
    {props.children}
  </StyledBoardWrapper>
);

Board.propTypes = {
  children: PropTypes.element.isRequired,
  startGame: PropTypes.bool,
};

export default Board;
