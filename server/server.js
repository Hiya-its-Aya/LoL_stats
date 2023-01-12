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

app.post('/signin', signinController.postAccount,  (req, res) => {
  // res.redirect(`/${res.locals.summoner}`)
  // return res.status(200).json(res.locals.summoner);
  console.log(res.locals.summoner)
  return res.redirect(302, `/profile/${res.locals.summoner}`)//.json(res.locals.sumData)
})

app.get('/profile/:id', riotAPI.getPlayerInfo, riotAPI.getMatches, (req, res) => {
  return res.status(200).send(res.locals.games);
})


app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});