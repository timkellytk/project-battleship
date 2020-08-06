import { shipFactory } from '../Ship/Ship';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cell = { ship: null, hit: null };

export const createBoard = () => {
  const board = {};

  columns.forEach((letter) => {
    const letterObject = {};
    rows.forEach((number) => {
      letterObject[number] = cell;
    });
    board[letter] = letterObject;
  });

  return board;
};

export const placeShip = (col, row, ship, shipBoard, vertical) => {
  let updatedGameboard = shipBoard;
  let activeCol = col;
  let activeRow = row;

  const noShip = (colInput, rowInput) => {
    const shipExists = updatedGameboard.board[colInput][rowInput].ship;
    return shipExists === null;
  };

  const cellAvailable = (colInput, rowInput) => {
    const columnExist = columns.filter((c) => c === colInput).length !== 0;
    const rowExist = rows.filter((r) => r === rowInput).length !== 0;
    if (columnExist && rowExist) {
      return noShip(colInput, rowInput);
    }
    return false;
  };

  for (let i = 0; i < ship.length; i += 1) {
    if (cellAvailable(activeCol, activeRow)) {
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
      if (vertical) {
        activeRow += 1;
      } else {
        const activeColASCII = activeCol.charCodeAt(0) + 1;
        activeCol = String.fromCharCode(activeColASCII);
      }
    } else {
      return null;
    }
  }
  return updatedGameboard;
};

export const receiveAttack = (col, row, shipBoard) => {
  const relevantHit = shipBoard.board[col][row].hit;
  const relevantShip = shipBoard.board[col][row].ship;

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
    }
    const updatedGameboard = {
      ...shipBoard,
      board: updatedBoard,
    };
    return updatedGameboard;
  }
  return null;
};

export const checkGameover = (ships) => {
  const sunkArray = Object.keys(ships).map((key) => {
    const ship = ships[key];
    return ship.sunk();
  });
  const isGameover = sunkArray.reduce((cur, prev) => prev && cur);
  return isGameover;
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
    placeShip,
    receiveAttack,
  };
  return game;
};
