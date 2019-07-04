'use strict'

function projectTable (collection) {
  return collection.map(projectItem).join('')
}

function projectItem (project) {
  return `
  <tr>
    <td>${project.title}</td>
  </tr>
  `
}

export default projectTable
