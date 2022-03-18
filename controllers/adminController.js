const { verifyUser } = require("../lib/jwt");
const fs = require("../lib/fsDeal");
const users = new fs("./modal/users.json");
const courses = new fs("./modal/courses.json");
const groups = new fs("./modal/group.json");

module.exports = {
  GET: (req, res) => {
    try {
      const allCourses = JSON.parse(courses.read());
      const allGroups = JSON.parse(groups.read());
      const allUsers = JSON.parse(users.read());
      
      const token = req.cookies.token;
      const verifyToken = verifyUser(token);
      if (!token) {
        res.redirect("/");
      }
      if (verifyToken && verifyToken.role == "admin") {
        res.render("admin", { allUsers, allCourses, allGroups });
      } else {
        res.redirect("/");
      }
    } catch (err) {
      console.log(err);
    }
  },
  
  POSTTEACHER: (req, res) => {
    
    req.body.role = 'teacher'
    const { name, phone, password, role, inlineRadioOptions, select } = req.body
    
    const allUsers = JSON.parse(users.read());
    allUsers.push({ id: allUsers.length + 1, username: name, phoneNumber: phone, password: password, role: role, gender: inlineRadioOptions, course: select })
    
    users.write(allUsers)
    
    res.redirect('/admin')
  },
  
  POSTSTUDENT: (req, res) => {
    
    req.body.role = 'student'
    const { name, phone, password, role, inlineRadioOptions, selectCourse } = req.body 
    
    const allUsers = JSON.parse(users.read());
    allUsers.push({ id: allUsers.length + 1, username: name, phoneNumber: phone, password: password, role: role, gender: inlineRadioOptions, course: selectCourse })
    
    users.write(allUsers)
    
    res.redirect('/admin')
  },
  
  POSTGROUP: (req, res) => {
    const { groupName, selectCourse, selectTeacher } = req.body
    
    const allGroups = JSON.parse(groups.read());
    allGroups.push({ id: allGroups.length + 1, groupName: groupName, teacherName: selectTeacher, courseName: selectCourse })
    
    groups.write(allGroups)
    
    res.redirect('/admin')
  },

  POSTCOURSE: (req, res) => {
    const { courseName, description, coursePrice } = req.body
    
    const allCourses = JSON.parse(courses.read());

    allCourses.push({ id: allCourses.length + 1, name: courseName, description: description, price: `${coursePrice} sum` })
    
    courses.write(allCourses)
    
    res.redirect('/admin')
  },
};
