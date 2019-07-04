'use strict'

import projectTable from '../components/projectTable'
import todoTable from '../components/todoTable'
import projectsSelect from '../components/projectsSelect'

let lists = {}
let DomElements = {}
let selectedProjectId = 0

function init ({ todoList, projectList }) {
  console.log('Initializating DOM')
  lists = { todos: todoList, projects: projectList }

  DomElements.projectForm = document.getElementById('new-project-form')
  DomElements.projectForm.addEventListener('submit', onProjectCreate)

  DomElements.taskForm = document.getElementById('new-task-form')
  DomElements.taskForm.addEventListener('submit', onTodoCreate)

  document.exposedFunctions = {
    selectProjectFilter,
    deleteTodo
  }

  onProjectChange()
  onTodoChange()
}

function onTodoCreate (event) {
  event.preventDefault()
  const todoParams = {
    title: event.target[0].value,
    project: parseInt(event.target[1].value),
    priority: event.target[2].value,
    dueDate: event.target[3].value,
    description: event.target[4].value
  }
  lists.todos.addItem(todoParams)
  onTodoChange()
}

function onTodoChange () {
  let todoCollection = lists.todos
    .getCollection()
    .filter(todo => todo.project === selectedProjectId)
  renderTodoTable(todoCollection)
  const $title = document.getElementById('todo-table-title')
  $title.innerHTML = lists.projects.getItem(selectedProjectId).title
  document.getElementById(`project-item-${selectedProjectId}`).classList.add('active')
}

function renderTodoTable (collection) {
  const table = document.getElementById('todo-table')
  table.innerHTML = todoTable(collection)
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

function selectProjectFilter (projectId) {
  document.getElementById(`project-item-${selectedProjectId}`).classList.remove('active')
  selectedProjectId = projectId
  onTodoChange()
}

function deleteTodo (todoId) {
  lists.todos.removeItem(todoId)
  onTodoChange()
}

export default { init }
