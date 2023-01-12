
const signinController = require('./signinController');
const key = 'RGAPI-e97caafc-e845-4b7b-ad53-a2418e7a5784'
const riotAPI = {};

riotAPI.getPlayerInfo = (req, res, next) => {
  res.locals.sumData = {};
  // console.log(res.locals.summoner)
  fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.id}?api_key=${key}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    for (const item in data ){
      res.locals.sumData[item] = data[item];
    }
    return next();
  })
  .catch (err => {
    console.log(err)
    next(err)});
  
}

riotAPI.getMatches = (req, res, next) => {
  console.log(res.locals.sumData)
  fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${res.locals.sumData.puuid}/ids?start=0&count=20&api_key=${key}`)
  .then(response => response.json())
  .then(games => {
    console.log(games); 
    res.locals.games = games, 
    console.log(res.locals.games)
    return next();
  })
  .catch (err => {
    console.log(err)
    next(err)});
  
}

riotAPI.getMatchData = () => {}

module.exports = riotAPI;
