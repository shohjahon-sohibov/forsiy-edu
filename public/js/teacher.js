const teacherStudentList = document.querySelector('.teacher__student-list')
const teacherGroupList = document.querySelector('.teacher__group-list')

teacherStudentBtn.addEventListener('click', e => {
  teacherStudentList.classList.add('show')
  teacherGroupList.classList.remove('show')
})

teacherGroupBtn.addEventListener('click', e => {
  teacherStudentList.classList.remove('show')
  teacherGroupList.classList.add('show')
})