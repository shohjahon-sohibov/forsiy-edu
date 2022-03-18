const { verifyUser } = require("../lib/jwt");

module.exports = {
  GET: (req, res) => {
    try {
      res.render("login");
    } catch (err) {
      res.send({
        message: 'invalid'
      })
      console.log(err);
    }
  },
  
  POST: (req, res) => {
    try {
      const { role } = req.body;
      // const token = req.cookies.token;
      // const tok = verifyUser(token)
      // console.log(tok.role);
        if (role == "admin") {
          // let token = signUser({ id: id, name: username });
          // res.cookie("token", token);
          res.redirect("/admin");
        } else if (role == "teacher") {
          // let token = signUser({ id: id, name: username });
          // res.cookie("token", token);
          res.redirect("/teacher");
        } else if (role == "student") {
          // let token = signUser({ id: id, name: username });
          // res.cookie("token", token);
          res.redirect("/student");
        }
    } catch (err) {
      console.log(err);
    }
  },
  
};
