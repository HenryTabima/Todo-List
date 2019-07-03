'use strict'
class Todo {
  constructor ({ title, description, dueDate, priority, project, isCompletd = false }) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
    this.isCompletd = isCompletd
  }
}

export default Todo
