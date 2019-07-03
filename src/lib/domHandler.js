'use strict'

function init ({ todoList, projectList }) {
  console.log('Initializating DOM')

  const $projectForm = document.getElementById('new-project-form')
  $projectForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const projectTitle = event.target[0].value
    const projectDescription = event.target[1].value
    console.log({ title: projectTitle, description: projectDescription })
    $projectForm.reset()
  })
  const $taskForm = document.getElementById('new-task-form')
  $taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Create Task', event.target)
    $taskForm.reset()
  })
}

export default { init }
