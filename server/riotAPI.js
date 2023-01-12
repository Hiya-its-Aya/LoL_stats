
const signinController = require('./signinController');
const key = 'RGAPI-e97caafc-e845-4b7b-ad53-a2418e7a5784'
const riotAPI = {};

riotAPI.getPlayerInfo = (req, res, next) => {
  console.log(res.locals.summoner)
  fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${res.locals.summoner}?api_key=${key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return next();
  })
  .catch(err => next(err))
  
}


module.exports = riotAPI;
