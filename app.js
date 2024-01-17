const path = require('path');
const express = require("express");
const app = express();

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
    console.log("servidor corriendo");
});

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Pokedex!" });
});

const axios = require("axios")
app.get("/pokemon", (req, res) => {
    var limite = req.param("limite");
    var pagina = req.param("pagina");
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=' + limite + '&offset=' + pagina)
        .then(response => {
            //console.log(response.data.results);

            var array = response.data.results;
            if (array.length > 0) {
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
                //res.send(array);
                res.json({ type: "suceess", text: array });
            } else {
                res.json({ type: "error", text: "no son paginables" });
            }

        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/pdf", (req, res) => {
    var nombrePokemon = req.param("nombre");
    axios.get('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

