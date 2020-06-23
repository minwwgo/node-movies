const express = require("express");
const favoriteMovies = require("./movies.json");
const cors = require('cors')
const app = express();
app.use(cors())
app.get("/", (req, res) => res.send("Hello Guys nodemon"));

app.get("/n", (req, res) => res.send("Hello Nader"));

app.get("/f", (req, res) => res.send("Hello Ferhat"));

// http://localhost:5555/search?q=moviename
app.get("/search", (req, res) => {
  console.log(`We are searching for ${req.query.q}`);
  if (req.query.q) {
    const movies = favoriteMovies.filter((movie) =>
      movie.movieName.toLowerCase().includes(req.query.q.toLowerCase())
    );
    res.send(movies);
  } else {
    res.send(400, "No q parameter provided !");
  }
});

app.get("/movies/best", (req, res) => {
  const movies = favoriteMovies.filter((movie) => movie.rating > 8.5);
  res.send(movies);
});
//Example of query parameters in youtube url
//https://www.youtube.com/watch?v=JAqfoq6G5UE&t=4m30s
function handleRequestForAllMovies(request, response) {
  response.send(favoriteMovies);
}
//    /movies?name=casino
app.get("/movies", handleRequestForAllMovies);

app.get('/movies/random', (req, res) => {
  res.send(pick(favoriteMovies))
})

function pick (arr) {
  const index = Math.floor(Math.random()* arr.length)
  return arr[index]
}

app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = favoriteMovies.find((movie) => movie.id === id);
  movie ? res.send(movie) : res.status(404).send("No Movie found");
});

app.get("/count", (req, res) => {
  res.send("count:" + favoriteMovies.length);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5555;
}
app.listen(port, () => console.log(`Listening on port ${port}`));
