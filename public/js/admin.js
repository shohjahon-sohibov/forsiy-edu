const teacherBtn = document.getElementById("teacherBtn");
const studentBtn = document.getElementById("studentBtn");
const groupBtn = document.getElementById("groupBtn");
const courseBtn = document.getElementById("courseBtn");

const teacherList = document.querySelector('.teacher-list')
const studentList = document.querySelector('.student-list')
const groupList = document.querySelector('.group-list')
const courseList = document.querySelector('.course-list')
const offCanvasBtnJs = document.getElementById('offCanvasBtnJs')


teacherBtn.addEventListener('click', e => {
  offCanvasBtnJs.setAttribute('data-bs-target', '#teacher')
  offCanvasBtnJs.setAttribute('aria-controls', 'teacher')
  teacherList.classList.add('show')
  studentList.classList.remove('show')
  groupList.classList.remove('show')
  courseList.classList.remove('show')
  console.log(offCanvasBtnJs);
})

studentBtn.addEventListener('click', e => {
  offCanvasBtnJs.setAttribute('data-bs-target', "#student")
  offCanvasBtnJs.setAttribute('aria-controls', "student")
  teacherList.classList.remove('show')
  studentList.classList.add('show')
  groupList.classList.remove('show')
  courseList.classList.remove('show')
})

groupBtn.addEventListener('click', e => {
  offCanvasBtnJs.setAttribute('data-bs-target', "#group")
  offCanvasBtnJs.setAttribute('aria-controls', "group")
  teacherList.classList.remove('show')
  studentList.classList.remove('show')
  groupList.classList.add('show')
  courseList.classList.remove('show')
})

courseBtn.addEventListener('click', e => {
  offCanvasBtnJs.setAttribute('data-bs-target', "#course")
  offCanvasBtnJs.setAttribute('aria-controls', "course")
  teacherList.classList.remove('show')
  studentList.classList.remove('show')
  groupList.classList.remove('show')
  courseList.classList.add('show')
})
