import { useState, useRef } from 'react';

import './App.css';
import { Navbar } from './Navbar';
import { Ingame } from './Ingame';
import { Endgame } from './Endgame';

function App() {

  let [turn, setTurn] = useState("Your Turn");
  let [wins, setWins] = useState(localStorage.getItem("zum_tic_tac_toe_wins") || 0);
  let [defeats, setDefeats] = useState(localStorage.getItem("zum_tic_tac_toe_defeats") || 0);
  let [endgameMessage, setEndgameMessage] = useState("");

  let [playerFills, setPlayerFills] = useState([]);
    let [computerFills, setComputerFills] = useState([]);

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
      playerFills={playerFills}
      setPlayerFills={setPlayerFills}
      computerFills={computerFills}
      setComputerFills={setComputerFills}
      />
      <Endgame
      endgameMessage={endgameMessage}
      endgameRef={endgameRef}
      />
    </div>
  );
}

export default App;

