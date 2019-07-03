import './main.scss'
import Project from './models/project'
import ListCreator from './lib/listCreator'

const projectList = new ListCreator(Project)
projectList.addItem({ title: 'project 1', description: 'first project guiide' })
projectList.addItem({ title: 'project 2', description: ' second description guide...' })
