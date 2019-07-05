'use strict'

function projectTable (collection) {
  return collection.map(projectItem).join('')
}

function projectItem (project) {
  return `
  <tr id="project-item-${project.id}">
    <td class="project-item" onClick="document.exposedFunctions.selectProjectFilter(${project.id})">${project.title}</td>
    <td class="project-options">
    ${(project.id !== 0) ? `
        <button type="button" class="btn btn-sm btn-info" data-toggle="modal"
        data-target="#projectModal" onClick="document.exposedFunctions.populateProjectForm(${project.id})"><i class="fas fa-edit"></i></button>

        <button class="btn btn-sm btn-danger" onClick="document.exposedFunctions.deleteProject(${project.id})"><i class="fas fa-trash"></i></button>
        ` : ''}
    </td>
  </tr>
  `
}

export default projectTable
