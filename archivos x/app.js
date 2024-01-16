const express = require("express");
const app = express();
const path=require("path")
//estableciendo el puerto a usar
app.set('port',(process.env.PORT || 3001))
app.listen(app.get('port'), () => {
    console.log("servidor corriendo");
});

//usa los archivos del fronend
app.use(express.static(path.resolve(__dirname,"./pokedex/src")));
//establecemos el uso del index para la interfaz en react
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../pokedex/public/","index.html"));
});
/*
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./pokedex/public/index.html"));
});*/

const axios=require("axios")
app.get("/pokemon", (req, res) => {
    var limite=req.param("limite");
    var pagina=req.param("pagina");
    axios.get('https://pokeapi.co/api/v2/pokemon?limit='+limite+'&offset='+pagina)
        .then(response => {
            //console.log(response.data.results);

            var array=response.data.results;
            //array.sort();
            //console.log(array)
            array.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
            res.send(array);
        })
        .catch(error => {
            console.log(error);
        });
});
/*
app.get("/", (req, res) => {
    var limite=req.param("limite");
    var pagina=req.param("pagina");
    axios.get('https://pokeapi.co/api/v2/pokemon?limit='+limite+'&offset='+pagina)
        .then(response => {
            //console.log(response.data.results);

            var array=response.data.results;
            //array.sort();
            //console.log(array)
            array.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
            res.send(array);
        })
        .catch(error => {
            console.log(error);
        });
});



app.get("/pokemon", (req, res) => {
    var query=req.param("query");
    axios.get('https://pokeapi.co/api/v2/pokemon/'+query)
        .then(response => {
            console.log(response.data.results);

            
            res.send(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
});*/
