const express = require("express");
const favoriteMovies = [
  {
    id: 0,
    movieName: "Forest Gump",
    year: 1994,
    rating: 8.8,
  },
  {
    id: 1,
    movieName: "Godfather",
    year: 1972,
    rating: 9.2,
  },
  {
    id: 2,
    movieName: "Cast Away",
    year: 2001,
    rating: 7.8,
  },
  {
    id: 3,
    movieName: "Schindler's List",
    year: 1994,
    rating: 8.9,
  },
];
const app = express();

app.get("/", (req, res) => res.send("Hello Min's movies from API server"));

app.get("/n", (req, res) => res.send("Hello Nader"));
app.get("/f", (req, res) => res.send("Hello Ferhat"));

function handleRequestForMovies(request, response) {
  response.send(favoriteMovies);
}
app.get("/movies", handleRequestForMovies);

const myPort = 5555;
app.listen(myPort, () => console.log(`Listening on port ${myPort}`));
