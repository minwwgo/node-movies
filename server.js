const express = require("express");
const favoriteMovies = require("./movies.json")
const app = express();

app.get("/", (req, res) => res.send("Hello Min's movies from API server"));

app.get("/n", (req, res) => res.send("Hello Nader"));

app.get("/f", (req, res) => res.send("Hello Ferhat"));

function handleRequestForAllMovies(request, response) {
  response.send(favoriteMovies);
}

app.get("/movies", handleRequestForAllMovies);

app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = favoriteMovies.find((movie) => movie.id === id);
  movie ? res.send(movie) : res.status(404).send("No Movie found");
});

app.get('/count',(req, res)=>{
  res.send("count:" + favoriteMovies.length)
})

const myPort = 5555;
app.listen(myPort, () => console.log(`Listening on port ${myPort}`));
