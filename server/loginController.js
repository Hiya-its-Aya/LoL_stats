const db = require('./accountModel')
const loginController = {};

loginController.authAccount = (req, res, next) => {
  const sql = `SELECT ${req.body.email} from accounts`
  db.query(sql)
  .then(response => {
    console.log(response.rows)
    //if email and passowrd match, return league account and go on to league search 
    return next();
  })
}

module.exports = loginController;