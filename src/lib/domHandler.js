'use strict'

import projectTable from '../components/projectTable'
import projectsSelect from '../components/projectsSelect'

let lists = {}
let DomElements = {}

function init ({ todoList, projectList }) {
  console.log('Initializating DOM')
  lists = { todos: todoList, projects: projectList }

  DomElements.projectForm = document.getElementById('new-project-form')
  DomElements.projectForm.addEventListener('submit', onProjectCreate)

  onProjectChange()

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
  lists.projects.addItem(projectParams)
  onProjectChange()
}

function onProjectChange () {
  let collection = lists.projects.getCollection()
  renderProjectTable(collection)
  renderProjectSelect(collection)
}

function renderProjectTable (collection) {
  const $table = document.getElementById('projects-table')
  $table.innerHTML = projectTable(collection)
}

function renderProjectSelect (collection) {
  const $select = document.getElementById('project-select')
  $select.innerHTML = projectsSelect(collection)
}

export default { init }
