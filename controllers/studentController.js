const { verifyUser } = require("../lib/jwt");
const fs = require("../lib/fsDeal");
const groups = new fs("./modal/group.json");
const users = new fs("./modal/users.json");
const homeworks = new fs("./modal/homework.json");

module.exports = {
  GET: (req, res) => {
    try {
      const token = req.cookies.token;
      const verifyToken = verifyUser(token);

      const allGroups = JSON.parse(groups.read());
      const allUsers = JSON.parse(users.read());
      const allHomeworks = JSON.parse(homeworks.read());

      const foundStudent = allUsers.find(e => e.username == verifyToken.name)
      const foundStudentCourse = allGroups.find(e => e.courseName == foundStudent.course)
      const foundStudentGroup = allHomeworks.find(e => e.groupName == foundStudentCourse.groupName)

      const tokenForCourseCheck = req.cookies.token;
      const { name } = verifyUser(tokenForCourseCheck);
      
      const studentName = allUsers.filter((e) => e.username == name);
      
      const filteredGroup = allGroups.find(
        (e) => e.courseName == studentName[0].course
        );
        const isCourseTrue = studentName[0].course == filteredGroup.courseName;
        let studentCourseName = studentName[0].course;
        
        if (!token) {
          res.redirect("/");
        }
        if (verifyToken && verifyToken.role == "student") {
          res.render("student", { allGroups, isCourseTrue, studentCourseName, foundStudentGroup });
        } else {
          res.redirect("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  };
  