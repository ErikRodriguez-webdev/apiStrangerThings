const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const CharacterRouter = require("../characters/charactersRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h1>API IS UP!</h1>`);
});

// server.use("/api/characters", CharacterRouter);

module.exports = server;
