const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const CharacterRouter = require("../characters/charactersRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "API IS UP!" });
});

server.use("/api/characters", CharacterRouter);
