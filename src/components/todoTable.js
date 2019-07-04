'use strick'
function todoTable (todoCollection) {
  return todoCollection.map(todoItem).join('')
}

function todoItem (todo) {
  return `
  <tr class="${todo.priority}" >
    <td>${todo.title}</td>
    <td>${todo.description}</td>
    <td>${todo.dueDate}</td>
    <td>
    <button type="button" class="btn btn-sm btn-info" data-toggle="modal"
    data-target="#taskModal" onClick="document.exposedFunctions.populateTodoForm(${todo.id})" > Update</button>

    <button class="btn btn-sm btn-danger" onClick="document.exposedFunctions.deleteTodo(${todo.id})"> delete</button>

    </td>
  </tr>
  `
}

export default todoTable
