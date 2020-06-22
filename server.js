

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello Min's movies from API server"));

app.get("/n", (req, res) => res.send("Hello Nader"));
app.get("/f", (req, res) => res.send("Hello Ferhat"));

function handleRequestForMovies(request, response){
  response.send("movie-one movie-two" )
}
app.get('/movies', handleRequestForMovies)



const myPort = 5555;
app.listen(myPort, () => console.log(`Listening on port ${myPort}`));
