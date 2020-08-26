import { shipFactory } from '../Ship/Ship';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cell = { ship: null, hit: null };

export const createBoard = () => {
  const board = {};
  columns.forEach((letter) => {
    const columnObj = {};
    rows.forEach((number) => {
      columnObj[number] = { ...cell };
    });
    board[letter] = columnObj;
  });
  return board;
};

export const placeShip = (col, row, ship, shipBoard, vertical) => {
  // Update gameboard variables
  let updatedGameboard = shipBoard;
  let activeCol = col;
  let activeRow = row;

  const cellAvailable = (colInput, rowInput) => {
    // Check if column and rows exist
    let columnExist = false;
    let rowExist = false;
    columns.forEach((c) => {
      if (c === activeCol) {
        columnExist = true;
      }
    });
    rows.forEach((r) => {
      if (r === activeRow) {
        rowExist = true;
      }
    });
    if (columnExist && rowExist) {
      const cellEmpty =
        updatedGameboard.board[colInput][rowInput].ship === null;
      return cellEmpty;
    }
    return false;
  };

  // Add the ship to relevant coordinates on the gameboard
  for (let i = 0; i < ship.length; i += 1) {
    if (!cellAvailable(activeCol, activeRow)) {
      return null;
    }

    // Add the ship to the coordinates
    const updatedRow = {
      ...updatedGameboard.board[activeCol][activeRow],
      ship,
    };
    const updatedCol = {
      ...updatedGameboard.board[activeCol],
      [activeRow]: updatedRow,
    };
    const updatedBoard = {
      ...updatedGameboard.board,
      [activeCol]: updatedCol,
    };
    updatedGameboard = {
      ...updatedGameboard,
      board: updatedBoard,
    };

    // Update the next coordinates
    if (vertical) {
      activeRow += 1;
    } else {
      const activeColASCII = activeCol.charCodeAt(0) + 1;
      activeCol = String.fromCharCode(activeColASCII);
    }
  }

  return updatedGameboard;
};

export const receiveAttack = (col, row, shipBoard) => {
  // Get cell information
  const relevantHit = shipBoard.board[col][row].hit;
  const relevantShip = shipBoard.board[col][row].ship;

  // If cell has not been hit, update hit for the cell
  if (relevantHit === null) {
    const updatedRow = {
      ...shipBoard.board[col][row],
      hit: true,
    };
    const updatedCol = {
      ...shipBoard.board[col],
      [row]: updatedRow,
    };
    const updatedBoard = {
      ...shipBoard.board,
      [col]: updatedCol,
    };

    // If ship exists on cell, update the hitArray of the relevant ship and return updatedGameboard
    if (relevantShip) {
      const updatedHitArray = relevantShip.hit();
      const updatedShip = { ...relevantShip, hitArray: updatedHitArray };
      const updatedShips = {
        ...shipBoard.ships,
        [relevantShip.id]: updatedShip,
      };
      const updatedGameboard = {
        ...shipBoard,
        board: updatedBoard,
        ships: updatedShips,
      };
      return updatedGameboard;
    } else {
      // If ship does not exist, return updatedGameboard
      const updatedGameboard = {
        ...shipBoard,
        board: updatedBoard,
      };
      return updatedGameboard;
    }
  }
  // If cell has already been hit, return null
  return null;
};

export const checkGameover = (ships) => {
  // Set gameover to true
  let gameover = true;

  // Transform ships to an true/false array for sunk
  const sunkArray = Object.keys(ships).map((key) => {
    const ship = ships[key];
    return ship.sunk();
  });

  // If a ship is not sunk set gameover to false
  sunkArray.forEach((sunk) => {
    if (sunk === false) {
      gameover = false;
    }
  });

  return gameover;
};

export const gameboard = () => {
  const board = createBoard();
  const ships = {
    carrier: shipFactory(5, 'carrier'),
    battleship: shipFactory(4, 'battleship'),
    cruiser: shipFactory(3, 'cruiser'),
    submarine: shipFactory(3, 'submarine'),
    destroyer: shipFactory(2, 'destroyer'),
  };
  const game = {
    board,
    ships,
    placeShip(col, row, ship, vertical) {
      return placeShip(col, row, ship, this, vertical);
    },
    receiveAttack(col, row) {
      return receiveAttack(col, row, this);
    },
    checkGameover() {
      return checkGameover(this.ships);
    },
  };
  return game;
};
