import './App.css';
import { Navbar } from './Navbar';
import { Ingame } from './Ingame';
import { Endgame } from './Endgame';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Ingame/>
      <Endgame/>
    </div>
  );
}

export default App;
