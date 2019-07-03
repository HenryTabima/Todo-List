'use strict'
class ListCreator {
  constructor (model) {
    this.index = 0
    this.collection = {}
    this.Model = model
  }

  addItem (params) {
    const item = new this.Model(params)
    this.collection[this.index] = item
    this.index++
    console.log(this.collection)
  }
}

export default ListCreator
