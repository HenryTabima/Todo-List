'use strict'

function projectSelect (collection) {
  return collection.map(selectItem).join('')
}

function selectItem (project) {
  return `<option value="${project.id}">${project.title}</option>`
}

export default projectSelect
