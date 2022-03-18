const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

// controllers
const loginController = require('./loginController')
const adminController = require('./adminController')
const teacherController = require('./teacherController')
const studentController = require('./studentController')

// middlewares
const authRoleMid = require('../middlewares/authRoleMid')
const isTokenValidMid = require('../middlewares/isTokenValidMid')

router
  .get('/', loginController.GET)
  .get('/login', loginController.GET)
  .post('/login', authRoleMid, loginController.POST)
  .get('/admin', isTokenValidMid, adminController.GET)
  .get('/teacher', isTokenValidMid, teacherController.GET)
  .get('/student', isTokenValidMid, studentController.GET)
  
  .post('/formTeacher', adminController.POSTTEACHER)
  .post('/formStudent', adminController.POSTSTUDENT)
  .post('/formGoup', adminController.POSTGROUP)
  .post('/formCourse', adminController.POSTCOURSE)
  
  .post('/setHomework', upload.array('file'), teacherController.POST)
module.exports = router
