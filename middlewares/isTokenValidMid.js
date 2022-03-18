// const { verifyUser } = require('../lib/jwt')
// const fs = require("../lib/fsDeal");
// const users = new fs("./modal/users.json");

module.exports = (req, res, next) => {
  try {   
    const token = req.cookies.token;

    if(!token) {
      return res.redirect('/login')
    }

    // const { name } = req.body;
    
    // const allUsers = JSON.parse(users.read());

    // const foundUser = allUsers.find(e => e.username == token.name && e.id == token.id);
      next()
    
  } catch (err) {
    console.log(err);
  }
};
