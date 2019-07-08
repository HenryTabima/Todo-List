'use strick'
function todoTable (todoCollection) {
  return todoCollection.map(todoItem).join('')
}

function todoItem (todo) {
  const doneClass = todo.isDone ? 'fa fa-check-square' : 'far fa-square'

  return `
  <tr class="${todo.priority} todo-item">
    <td class="icon" onClick="document.exposedFunctions.toogleDone(${todo.id})"><i class="${doneClass}"></i></td>
    <td>${todo.title}</td>
    <td>${todo.description}</td>
    <td>${todo.dueDate}</td>
    <td class="options">
      <button type="button" class="btn btn-sm btn-info" data-toggle="modal"
      data-target="#taskModal" onClick="document.exposedFunctions.populateTodoForm(${todo.id})"><i class="fas fa-edit"></i></button>

      <button class="btn btn-sm btn-danger" onClick="document.exposedFunctions.deleteTodo(${todo.id})"><i class="fas fa-trash"></i></button>
    </td>
  </tr>
  `
}

export default todoTable
