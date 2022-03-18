const fs = require("../lib/fsDeal");
const users = new fs("./modal/users.json");
const { signUser } = require("../lib/jwt");

module.exports = (req, res, next) => {
  try {
    // const { token } = req.cookies;
    // console.log(token);
    const { name, password } = req.body;
    
    const allUsers = JSON.parse(users.read());
    const foundUser = allUsers.find((e) => e.username == name && e.password == password);
    
    if (!foundUser) {
      res.send({
        status: 401,
        message: "User not found",
      });
    } else {
      let token = signUser({ id: foundUser.id, name: foundUser.username, role: foundUser.role });
      res.cookie("token", token);
      req.body = foundUser;
      next();
    }
    
  } catch (err) {
    console.log(err);
  }
};
