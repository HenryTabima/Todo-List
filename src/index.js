import './main.scss'
import Project from './models/project'
import Todo from './models/todo'
import Collection from './lib/collection'
import DOMHandler from './lib/domHandler'

document.addEventListener('DOMContentLoaded', () => {
  const projectList = new Collection(Project)
  const todoList = new Collection(Todo)

  projectList.addItem({ title: 'Default', description: 'Default project' })

  DOMHandler.init({ todoList, projectList })
})
