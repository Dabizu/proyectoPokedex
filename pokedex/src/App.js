import logo from './logo.svg';
import './App.css';
import React from 'react';
function pedirPokemon(){
  fetch('http://localhost:3000/?limite=5&pagina=3')
  .then(response => response.json())
  .then(data => console.log(data));
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id="pokedex">

        </div>
      </header>
    </div>
  );
}*/

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <div id="pokedex">

        </div>
      </header>
    </div>
    );
  }
}

export default App;
