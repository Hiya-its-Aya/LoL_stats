const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Summoner!" });
});

app.get("/summonersearch", (req, res) => {
  // fetch riot api 
  // console.log(req);
  // fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' )
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});