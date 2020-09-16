class Ship {
  constructor(row, col, shipLength = 1, orientation = true) {
    this.length = shipLength;
    this.hitCount = 0;
    this.startCoordinate = { row, col };
    this.orientation = orientation;
  }
  toggleOrientation() {
    this.orientation = !this.orientation;
  }
  getCoordinates(
    startCoordinate = this.startCoordinate,
    orientation = this.orientation
  ) {
    const { row, col } = startCoordinate;
    const coords = [...Array(this.length)];
    return coords.map((_, index) =>
      orientation ? { row, col: col + index } : { row: row + index, col }
    );
  }
  hit() {
    this.hitCount += 1;
  }
  isSunk() {
    return this.length === this.hitCount;
  }
}

export default Ship;
