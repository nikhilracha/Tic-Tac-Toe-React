import React from "react";
import Display from './components/Display';
import Board from './components/Board';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Display />
      <Board />
    </div>
  );
};

export default App;
