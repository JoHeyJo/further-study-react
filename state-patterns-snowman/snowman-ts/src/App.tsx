import React from "react";
import "./App.css";
import Snowman from "./Snowman";

function App() {
  return (
    <div className="App">
      <Snowman images={[]} words={[]} maxWrong={6}/>
    </div>
  );
}

export default App;
