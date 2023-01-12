const db = require('./accountModel')
const signinController = {};

signinController.postAccount = (req, res, next) => {
  const sql = `INSERT INTO accounts (email, password, league_username) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.league_username}');`
  db.query(sql)
  .then(response => {
    console.log(response.rows)
    res.locals.summoner = req.body.league_username;
    //go to api caller
    return next();
  })
}

module.exports = signinController;