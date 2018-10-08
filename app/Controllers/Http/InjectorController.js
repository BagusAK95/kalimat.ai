'use strict'

const Store = use('App/Store/Memory')

class InjectorController {
  async get({ params }) {
    return Store.get(params.model, params.id)
  }

  async list({ params, request }) {
    return Store.list(params.model, request.get().page, request.get().limit)    
  }

  async create({ params, request }) {
    return Store.create(params.model, request.all())
  }

  async update({ params, request }) {
    return Store.update(params.model, params.id, request.all())
  }

  async remove({ params }) {
    return Store.remove(params.model, params.id)
  }
}

module.exports = InjectorController
