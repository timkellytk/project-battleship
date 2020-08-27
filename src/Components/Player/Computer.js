import gameboard from '../Gameboard/Gameboard';

const computer = () => {
  const computerGameboard = gameboard();
  return {
    gameboard: computerGameboard,
  };
};

export default computer;
