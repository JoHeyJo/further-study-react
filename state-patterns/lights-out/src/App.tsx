//dependencies
import React from 'react';
import './App.css';
// components
import Board from './Board';

/** App that renders the LightOut game. */
function App() {
  return (
    <div className="App"> 
      <Board nrows={3} ncols={3} chanceLightStartsOn={Math.random() < .5}/>
    </div>
  );
}

export default App;
