const { verifyUser } = require("../lib/jwt");
const fs = require('../lib/fsDeal')
const users = new fs('./modal/users.json')
const groups = new fs('./modal/group.json')
const homeworks = new fs('./modal/homework.json')

module.exports = {
  GET: (req, res) => {
    try {
      const allUsers = JSON.parse(users.read())
      const allGroups = JSON.parse(groups.read())
      
      const token = req.cookies.token;
      const verifyToken = verifyUser(token);
      
      const foundGroup = allGroups.find(e => e.teacherName == verifyToken.name) 
      console.log(foundGroup);
      
      const foundStudents = allUsers.filter(e => e.course == foundGroup.courseName && e.role == 'student')
      
      if (!token) {
        res.redirect("/");
      } 
      if(verifyToken && verifyToken.role == 'teacher') {
        res.render('teacher', { foundStudents, foundGroup })
      }
      else {
        res.redirect("/");
      }

    } catch (err) {
      console.log(err);
    }
  },
  
  POST: (req, res) =>  {
    try {
      const  { groupName, description, file } = req.body
      
      const allHomeworks = JSON.parse(homeworks.read())
      allHomeworks.push({ id: allHomeworks.length + 1, groupName: groupName, file: file, description: description })
      homeworks.write(allHomeworks)
      
      res.redirect('/teacher')
    } catch(err) {
      console.log(err);
    }
  }
};