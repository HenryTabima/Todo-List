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
  DomElements.projectForm.addEventListener('submit', handleProjectForm)

  DomElements.todoForm = document.getElementById('new-task-form')
  DomElements.todoForm.addEventListener('submit', handleTodoForm)

   document.getElementById('add-todo-button').addEventListener('click', resetTodoForm)
  document.getElementById('add-project-button').addEventListener('click', resetProjectForm)

  document.exposedFunctions = {
    selectProjectFilter,
    deleteTodo,
    populateTodoForm,
    deleteProject,
    populateProjectForm,
    toogleDone
  }

  onProjectChange()
  onTodoChange()
}

function resetTodoForm () {
  DomElements.todoForm.elements[5].innerHTML = 'Add Todo'
  DomElements.todoForm.elements[6].value = ''
  DomElements.todoForm.reset()
}

function resetProjectForm () {
  DomElements.projectForm.elements[2].innerHTML = 'Add Project'
  DomElements.projectForm.elements[3].value = ''
  DomElements.projectForm.reset()
}

function handleTodoForm (event) {
  event.preventDefault()
  const hiddenId = event.target[6].value
  let message = ''

  const todoParams = {
    title: event.target[0].value,
    project: parseInt(event.target[1].value),
    priority: event.target[2].value,
    dueDate: event.target[3].value,
    description: event.target[4].value
  }

  if (hiddenId === '') {
    lists.todos.addItem(todoParams)
    message = 'Todo Created '
  } else {
    lists.todos.updateItem({ id: parseInt(hiddenId), values: todoParams })
    message = 'Todo Updated'
  }
  onTodoChange()
  alert(message)
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

function handleProjectForm (event) {
  event.preventDefault()
  const hiddenId = event.target[3].value
  let message = ''

  const projectParams = {
    title: event.target[0].value,
    description: event.target[1].value
  }
  if (hiddenId === '') {
    lists.projects.addItem(projectParams)
    message = 'Project Created.'
  } else {
    lists.projects.updateItem({ id: parseInt(hiddenId), values: projectParams })
    message = 'Project Updated.'
  }
  onProjectChange()
  alert(message)
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

function toogleDone (todoId) {
  const todo = lists.todos.getItem(todoId)
  lists.todos.updateItem({
    id: todoId,
    values: {
      isDone: !todo.isDone
    }
  })
  onTodoChange()
}

function deleteTodo (todoId) {
  lists.todos.removeItem(todoId)
  onTodoChange()
}
function deleteProject (projectId) {
  lists.projects.removeItem(projectId)
  onProjectChange()
}

function populateTodoForm (todoId) {
  const todo = lists.todos.getItem(todoId)
  let todoForm = DomElements.todoForm
  todoForm.elements[0].value = todo.title
  todoForm.elements[1].value = todo.project
  todoForm.elements[2].value = todo.priority
  todoForm.elements[3].value = todo.dueDate
  todoForm.elements[4].value = todo.description
  todoForm.elements[5].innerHTML = 'Update Todo'
  todoForm.elements[6].value = todoId
  console.log(todoId)
}

function populateProjectForm (projectId) {
  const project = lists.projects.getItem(projectId)
  let projectForm = DomElements.projectForm
  projectForm.elements[0].value = project.title
  projectForm.elements[1].value = project.description
  projectForm[2].innerHTML = 'Update Project'
  projectForm[3].value = parseInt(projectId)
}


export default { init }
