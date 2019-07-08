import './main.scss'
import Project from './models/project'
import Todo from './models/todo'
import Collection from './lib/collection'
import DOMHandler from './lib/domHandler'

document.addEventListener('DOMContentLoaded', () => {
  const projectList = new Collection(Project)
  const todoList = new Collection(Todo)

  projectList.addItem({ title: 'Default', description: 'Default project' })
  todoList.addItem({ title: 'buy a fast car', description: 'make some mechanic friends', priority: 'High', project: 0 })
  todoList.addItem({ title: 'Build an app', description: 'make some dev friends', priority: 'Normal', project: 0 })
  todoList.addItem({ title: 'be lazy', description: 'make some lazy friends', priority: 'Low', project: 0 })

  projectList.addItem({ title: 'Project1', description: 'example project' })
  todoList.addItem({ title: 'First task', description: 'start here', priority: 'High', project: 1 })

  DOMHandler.init({ todoList, projectList })
})
