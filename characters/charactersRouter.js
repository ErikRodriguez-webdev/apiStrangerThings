const express = require("express");
const Chars = require("./charactersModel");

const router = express.Router();

router.get("/", (req, res) => {
  Chars.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error with getting data." });
    });
});

module.exports = router;
