
const signinController = require('./signinController');
const key = 'RGAPI-f7b1b113-9b6a-4cd4-ba19-a18a4e6ae1ad'
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
    return next(err)});
}

riotAPI.getMatchData = (req, res, next) => {
  const games = res.locals.games;
  let playerNum;
  let matchInfo = [];
  // games.forEach(game => {
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${games[0]}?api_key=${key}`)
    .then(match => match.json())
    .then(match => {
      res.locals.match = match;
      // for (let i = 1; i < 11; i++){
      //   if (res.locals.sumData.puuid === match.metadata.particpants[i]){
      //     playerNum = i;
      //   }
      // }
      // res.locals.match = info.participants[playerNum-1]
      console.log(res.locals.match);
      return next()
    })
      .catch (err => {
        console.log(err)
        return next(err)});
    
  // })
}

module.exports = riotAPI;
