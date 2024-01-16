import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { InputHTMLAttributes } from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/pokemon")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <div id="pokedex">
          
          <center>
            <br/>
            <div id='informacion'></div>
            
          </center>
          <div id='lista'>
          </div>
          <div><input id="limite"/> <button id="anterior">anterior</button> <button>siguiente</button> </div>
          <p>{!data}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
/*
class App extends React.Component{
  
  render(){
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/pokemon?limite=5&pagina=3")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return(
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
  }
}*/

/*function pedirPokemon(){
  fetch('http://localhost:3000/?limite=5&pagina=3')
  .then(response => response.json())
  .then(data => console.log(data));
}*/


