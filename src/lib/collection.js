'use strict'
class Collection {
  constructor (model) {
    this._index = 0
    this._collection = {}
    this.Model = model
  }

  getCollection () {
    return Object.entries(this._collection).map(([id, item]) => ({ ...item, id: parseInt(id) }))
  }

  getItem (id) {
    return {
      ...this._collection[id],
      id
    }
  }

  addItem (params) {
    const item = new this.Model(params)
    this._collection[this._index] = item
    this._index++
    return this
  }

  removeItem (index) {
    delete this._collection[index]
    return this
  }

  updateItem ({ id, values }) {
    this._collection[id] = {
      ...this._collection[id],
      ...values
    }
    return this
  }
}

export default Collection
