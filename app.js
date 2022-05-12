const express = require("express");

const app = express();

app.use(express.json());

const fakeDB = [
  {
    id: Math.floor(Math.random() * 100),
    email: "test@example.com",
  },
];

const hacemos=[{once:"sopaipillas",tomar:"cafe"},];
app.get("/", (req, res) => {
  return res.status(200).json({ data: hacemos });
});


module.exports = app;