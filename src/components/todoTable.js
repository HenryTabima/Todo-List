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
    <button class=" btn btn-sm btn-info"> Update</button>
    <button class=" btn btn-sm btn-danger"> delete</button>

    </td>
  </tr>
  `
}

export default todoTable
