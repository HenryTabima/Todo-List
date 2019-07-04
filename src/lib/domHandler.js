'use strict'
let lists = {}
let DomElements = {}

function init ({ todoList, projectList }) {
  console.log('Initializating DOM')
  lists = { todos: todoList, projects: projectList }

  DomElements.projectForm = document.getElementById('new-project-form')
  DomElements.projectForm.addEventListener('submit', onProjectCreate)

  // const $taskForm = document.getElementById('new-task-form')
  // $taskForm.addEventListener('submit', (event) => {
  //   event.preventDefault()
  //   console.log('Create Task', event.target)
  //   $taskForm.reset()
  // })
}

function onProjectCreate (event) {
  event.preventDefault()
  const projectParams = {
    title: event.target[0].value,
    description: event.target[1].value
  }
  lists.projects.addItems(projectParams)
  onProjectChange()
  DomElements.projectForm.reset()
}

function onProjectChange () {
  let collection = lists.projects.getCollection()
  let row = document.createElement('tr')

}

// function addProjectDOM (title, description) {
//   let row = document.createElement('tr')
// }

export default { init }
