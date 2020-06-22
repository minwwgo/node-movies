const express = require("express");
const favoriteMovies = [
  {
    id: 10,
    movieName: "Forest Gump",
    year: 1994,
    rating: 8.8,
  },
  {
    id: 20,
    movieName: "Godfather",
    year: 1972,
    rating: 9.2,
  },
  {
    id: 30,
    movieName: "Cast Away",
    year: 2001,
    rating: 7.8,
  },
  {
    id: 40,
    movieName: "Schindler's List",
    year: 1994,
    rating: 8.9,
  },
];
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

const myPort = 5555;
app.listen(myPort, () => console.log(`Listening on port ${myPort}`));
