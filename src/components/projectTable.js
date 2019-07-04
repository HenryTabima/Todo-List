'use strict'

function projectTable (collection) {
  return collection.map(projectItem).join('')
}

function projectItem (project) {
  return `
  <tr id="project-item-${project.id}">
    <td class="project-item" onClick="document.exposedFunctions.selectProjectFilter(${project.id})">${project.title}</td>
  </tr>
  `
}

export default projectTable
