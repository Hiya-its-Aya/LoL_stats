const db = require('./accountModel')
const signinController = {};

signinController.postAccount = (req, res, next) => {
  const sql = `INSERT INTO accounts (email, password, league_username) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.league_username}')`;
  db.query(sql)
  .then(response => {
    console.log(req.body.league_username)
    res.locals.summoner = req.body.league_username;
    //go to api caller
    return next();
  })
  .catch (err => {
    console.log(err)
    next(err)});
}

module.exports = signinController;