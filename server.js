

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello Min's movies from api server"));

app.listen(3000, () => console.log("Listening on port 3000!"));