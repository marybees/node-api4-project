const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    data: "Tesing endpoint",
  });
});

module.exports = server;
