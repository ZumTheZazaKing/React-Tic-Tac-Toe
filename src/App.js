import { useState, useRef } from 'react';

import './App.css';
import { Navbar } from './Navbar';
import { Ingame } from './Ingame';
import { Endgame } from './Endgame';

function App() {

  let [turn, setTurn] = useState("Your Turn");
  let [wins, setWins] = useState(0);
  let [defeats, setDefeats] = useState(0);
  let [endgameMessage, setEndgameMessage] = useState("");

  let cellRef = useRef();
  let endgameRef= useRef(); 

  return (
    <div className="App">
      <Navbar
      wins={wins}
      defeats={defeats}
      />
      <Ingame
      turn={turn}
      setTurn={setTurn}
      wins={wins}
      setWins={setWins}
      defeats={defeats}
      setDefeats={setDefeats}
      setEndgameMessage={setEndgameMessage}
      cellRef={cellRef}
      endgameRef={endgameRef}
      />
      <Endgame
      endgameMessage={endgameMessage}
      endgameRef={endgameRef}
      />
    </div>
  );
}

export default App;

