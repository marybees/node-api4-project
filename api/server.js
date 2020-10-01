const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    test: "Tesing endpoint",
  });
});

module.exports = server;
