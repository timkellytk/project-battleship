import React from 'react';
import styled from 'styled-components';
import shipImage from './ship-image.png';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { boardDimensions, ItemTypes } from '../../Constants/Constants';
import PropTypes from 'prop-types';

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
        ref={drag}
        length={props.length}
        orientation={props.orientation}
        showcase={props.showcase}
        sunk={props.sunk}
        isDragging={isDragging}
        onClick={props.toggleShip}
      />
    </>
  );
};

Ship.propTypes = {
  length: PropTypes.number.isRequired,
  shipIndex: PropTypes.number,
  toggleShip: PropTypes.func,
  orientation: PropTypes.bool,
  sunk: PropTypes.bool,
};

export default Ship;
