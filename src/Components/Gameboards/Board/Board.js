import React from 'react';
import styled from 'styled-components';

const StyledBoardWrapper = styled.div`
  display: grid;
  width: 432;
  height: 432;
  grid-template: 32px 1fr / 32px 1fr;
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
  <StyledBoardWrapper>
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

export default Board;
