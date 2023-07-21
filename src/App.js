import logo from './logo.svg';
import './App.css';
import Cube from './compenents/Cube';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1 style={{color:"#61dafb"}}>Good Luck!</h1>
      <div className='cube-main'>
        <Cube /> 
      </div>
    </div>
  );
}

export default App;
