import React from 'react';
import Game from './Components/Game/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.less';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Game />
    </DndProvider>
  );
};

export default App;
