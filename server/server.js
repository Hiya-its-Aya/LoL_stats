const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const signinController = require('./signinController');

const bodyParser = require('body-parser');

const path = require('path');

const cors = require('cors');

const riotAPI = require('./riotAPI')


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/signin', (req,res) =>{
  express.static(path.join(__dirname,'../build'));
  
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello summoner!" });
});

app.post('/signin', signinController.postAccount, riotAPI.getPlayerInfo,  (req, res) => {
  // res.redirect(`/${res.locals.summnoner}`)
  // return res.status(200).json(res.locals.summoner);
})

// app.get("/summonersearch", (req, res) => {
//   // fetch riot api 
//   // console.log(req);
//   // fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' )
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});