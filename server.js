const express = require("express");
const favoriteMovies = require("./movies.json");
const app = express();

app.get("/", (req, res) => res.send("Hello Min's movies from API server"));

app.get("/n", (req, res) => res.send("Hello Nader"));

app.get("/f", (req, res) => res.send("Hello Ferhat"));
app.get("/search", (req, res) => {
  console.log(`We are searching for ${req.query.q}`);
  if (req.query.q) {
    const movies = favoriteMovies.filter((movie) =>
      movie.movieName.toLowerCase().includes(req.query.q.toLowerCase())
    );
    res.send(movies);
  } else {
    res.send("No q parameter provided !");
  }
});
//Example of query parameters in youtube url
//https://www.youtube.com/watch?v=JAqfoq6G5UE&t=4m30s
function handleRequestForAllMovies(request, response) {
  response.send(favoriteMovies);
}
//    /movies?name=casino
app.get("/movies", handleRequestForAllMovies);

app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = favoriteMovies.find((movie) => movie.id === id);
  movie ? res.send(movie) : res.status(404).send("No Movie found");
});

app.get("/count", (req, res) => {
  res.send("count:" + favoriteMovies.length);
});

const myPort = 5555;
app.listen(myPort, () => console.log(`Listening on port ${myPort}`));
