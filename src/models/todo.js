'use strict'
class Todo {
  constructor ({
    title,
    description = '',
    dueDate,
    priority,
    project = null,
    isDone = false
  }) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
    this.isDone = isDone
  }
}

export default Todo
