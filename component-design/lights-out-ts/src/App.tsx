import React from 'react';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      
      <Board nrows={4} ncols={4} chanceLIghtStartsOn={5.5}/>
    </div>
  );
}

export default App;
