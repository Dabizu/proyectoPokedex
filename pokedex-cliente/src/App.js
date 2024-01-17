import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const [data, setData] = React.useState(null);
  const [limite, setLimite] = useState('0');
  //const limitetemp=Number(limite);
  const [pagina, setPagina] = useState('0');
  const paginaTemp = Number(pagina);

  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [abilidades, setAbilidades] = React.useState(null);
  const [peso, setPeso] = useState('');
  const [moves, setMoves] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const listarPokemon = (limite, pagina) => {
    fetch("/pokemon?limite=" + limite + "&pagina=" + pagina)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.type === "error") {
          alert("no es posible su paginacion")
        } else {
          //var plantilla = '';
          document.getElementById("lista").innerHTML = "";
          data.text.forEach(element => {
            console.log(element.name);
            //plantilla = plantilla + '<button class="btn warning" onclick=">' + element.name + '</button>'
            var button = document.createElement("button");
            button.innerText = element.name;
            button.setAttribute("class", "btn warning");

            button.onclick = () => {
              buscarPokemon(element.name);
            }
            document.getElementById("lista").append(button);
          });
          //document.getElementById("lista").innerHTML = plantilla;

        }

      });

  }

  const buscarPokemon = (nombre) => {
    console.log(nombre)

    fetch("/pdf?nombre=" + nombre)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setImagen(data.sprites.other.home.front_default);
        setNombre(data.name);
        console.log(data.abilities)
        var arrayAbilidades = [];
        for(var i=0;i<data.abilities.length;i++){
          console.log(data.abilities[i].ability.name)
          arrayAbilidades.push(data.abilities[i].ability.name);
        }
        /*
        data.abilities.forEach(element => {
          console.log(element.name)
          arrayAbilidades.push(element.name);
        });*/
        setAbilidades(arrayAbilidades);

        setPeso(data.weight);
        console.log(data.moves)
        var arrayMoves = [];
        for(var i=0;i<data.moves.length;i++){
          arrayMoves.push(data.moves[i].move.name);
        }
        setMoves(arrayMoves);
        /*
        
        data.moves.forEach(element => {
          arrayMoves.push(element.name)
        });
        */
        document.getElementById("imagenPokemon").src = data.sprites.other.dream_world.front_default
      });
  }

  const generarPedf = () => {
    if (nombre != '') {
      const pdf = new jsPDF({
        format: 'a4',
        unit: 'px',
      });
      //pdf.addImage(imagen,'PNG',0,0);
      
      var plantilla='<div><img src="'+imagen+'" width=100 height=100/> <p>nombre:'+nombre+'</p>   peso:'+peso+'</div>';
      console.log(abilidades)
      
      plantilla=plantilla+'<p SIZE=2> abilidades:</p>';
      for(var i=0;i<abilidades.length;i++){
        plantilla=plantilla+'<p SIZE=2> '+abilidades[i]+'</p>';
      }
      
      plantilla=plantilla+'<p SIZE=2> movimientos</p>';
      moves.forEach(element => {
        plantilla=plantilla+'<p SIZE=2> '+element+'</p>';
      });

      pdf.html(plantilla, {
        async callback(pdf){
          await pdf.save("informacion-pokemon.pdf");
        }
      });

      /*
      html2canvas(document.querySelector('.imagenPokemon'), {}).then((canvas) => {
        //document.body.appendChild(canvas); // if you want see your screenshot in body.
        const imgData = canvas.toDataURL('image/png');
        //const pdf = new jsPDF('p', 'in', 'a3'); //set pdf size to 8.5in x 11in Portrait
        pdf.addImage(imgData, 'PNG', 0, 0);
        //pdf.save('CV.pdf');
      });*/

      //console.log(imagen)
      /*
      var img=new Image();
      img.src=imagen;
      //pdf.addImage(img,'PNG',0,0);
      pdf.addImage(img, 'PNG', 25, 30, 170, 180); 
  *
      pdf.text('Nombre: '+nombre, 10,10);
      pdf.text("abilidades",10,20);
      //pdf.text(abilidades,10,20)
      
      /*
      abilidades.forEach(element => {
        pdf.text(element,10,20);
      });*/

      
    } else {
      alert("no haz seleccionado un pokemon por lo tanto no puedes genera pdf");
    }

  }

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

        <p>{!data ? "Loading..." : data}</p>
        <div id="pokedex">

          <center>
            <br />
            <div id='informacion'>
              <img id="imagenPokemon" className="imagenPokemon" />
              <button id="generaPdf" onClick={() => { generarPedf(); }}>generar pdf</button>
            </div>

          </center>

          <div>
            <div>
              <div class="box01">
                <div class="box02">limite:</div>
                <div class="box03"><input value={limite} onChange={e => setLimite(e.target.value)} type="number" /></div>
              </div>

              <div class="box01">
                <div class="box02">pagina:</div>
                <div class="box03"><input value={pagina} onChange={e => setPagina(e.target.value)} type="number" /></div>
              </div>
            </div>

            <button onClick={() => { setPagina(paginaTemp - 1); listarPokemon(limite, pagina); }}>anterior</button>
            <button onClick={() => { setPagina(paginaTemp + 1); listarPokemon(limite, pagina); }}>siguiente</button>

            <button onClick={() => { listarPokemon(limite, pagina); }}>mostrar lista</button>

          </div>

          <center>
            <br />
            <div id='lista'>
            </div>
          </center>


          <p>{!data}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
