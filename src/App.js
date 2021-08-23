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

  let cellOneRef = useRef();
  let cellTwoRef = useRef();
  let cellThreeRef = useRef();
  let cellFourRef = useRef();
  let cellFiveRef = useRef();
  let cellSixRef = useRef();
  let cellSevenRef = useRef();
  let cellEightRef = useRef();
  let cellNineRef = useRef();

  let endgameRef= useRef();

  function playAgain(){
    cellOneRef.current.innerHTML = "";cellOneRef.current.style.color = "black";
    cellTwoRef.current.innerHTML = "";cellTwoRef.current.style.color = "black";
    cellThreeRef.current.innerHTML = "";cellThreeRef.current.style.color = "black";
    cellFourRef.current.innerHTML = "";cellFourRef.current.style.color = "black";
    cellFiveRef.current.innerHTML = "";cellFiveRef.current.style.color = "black";
    cellSixRef.current.innerHTML = "";cellSixRef.current.style.color = "black";
    cellSevenRef.current.innerHTML = "";cellSevenRef.current.style.color = "black";
    cellEightRef.current.innerHTML = "";cellEightRef.current.style.color = "black";
    cellNineRef.current.innerHTML = "";cellNineRef.current.style.color = "black";
    setTurn("Your Turn");
    setEndgameMessage("");
    endgameRef.current.className = "hide";
    setPlayerFills([]);
    setComputerFills([]);
  }

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
      endgameRef={endgameRef}
      playerFills={playerFills}
      setPlayerFills={setPlayerFills}
      computerFills={computerFills}
      setComputerFills={setComputerFills}
      cellOneRef={cellOneRef}
      cellTwoRef={cellTwoRef}
      cellThreeRef={cellThreeRef}
      cellFourRef={cellFourRef}
      cellFiveRef={cellFiveRef}
      cellSixRef={cellSixRef}
      cellSevenRef={cellSevenRef}
      cellEightRef={cellEightRef}
      cellNineRef={cellNineRef}
      />
      <Endgame
      endgameMessage={endgameMessage}
      endgameRef={endgameRef}
      playAgain={playAgain}
      />
    </div>
  );
}

export default App;

