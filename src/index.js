import './main.scss'
import Project from './models/project'
import Todo from './models/todo'
import Collection from './lib/collection'
import DOMHandler from './lib/domHandler'

const projectList = new Collection(Project)
const todoList = new Collection(Todo)

DOMHandler.init({ todoList, projectList })
