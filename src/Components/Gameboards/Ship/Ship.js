import React from 'react';
import styled from 'styled-components';
import shipImage from './ship-image.png';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { boardDimensions, ItemTypes } from '../../Constants/Constants';

const ShipBlock = styled.div`
  position: ${[(props) => (props.showcase ? 'relative' : 'absolute')]};
  cursor: pointer;
  z-index: 100;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: ${(props) =>
    props.orientation
      ? (boardDimensions / 10) * (props.length * 0.95) + 'px'
      : boardDimensions / 10 + 'px'};
  height: ${(props) =>
    !props.orientation
      ? (boardDimensions / 10) * (props.length * 0.95) + 'px'
      : boardDimensions / 10 + 'px'};
  border: 1px solid hsla(224, 100%, 63.84%, 1);
  background-color: ${(props) => {
    if (props.sunk) {
      return '#db4c3f';
    }
    if (!props.startGame && props.isCurrentShip) {
      return 'hsla(280, 100%, 66.74%, 0.60)';
    }
    return 'hsla(228, 100%, 66.74%, 0.22)';
  }};
`;

const Ship = (props) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.SHIP, index: props.shipIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <>
      <DragPreviewImage connect={preview} src={shipImage} />
      <ShipBlock
        {...props}
        onClick={props.toggleShip}
        ref={drag}
        isDragging={isDragging}
      />
    </>
  );
};

export default Ship;
