'use strict'

const DatabaseStore = {
  get: async (table, id) => {
    try {
      const model = use('App/Models/Database/' + table)
      const data = await model.find(id)

      return {
        success: true,
        message: data
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  },

  list: async (table, page, limit) => {
    try {
      const model = use('App/Models/Database/' + table)
      const data = await model.query().paginate(page, limit)

      return {
        success: true,
        message: data.toJSON().data
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  },

  create: async(table, data) => {
    try {
      const model = use('App/Models/Database/' + table)
      const insert = await model.create(data)

      return {
        success: true,
        message: insert.id
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  },

  update: async(table, id, data) => {
    try {
      const model = use('App/Models/Database/' + table)
      await model.query().where('id', id).update(data)

      return {
        success: true,
        message: 'Updated'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  },

  remove: async (table, id) => {
    try {
      const model = use('App/Models/Database/' + table)
      await model.query().where('id', id).delete()

      return {
        success: true,
        message: 'Deleted'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}

module.exports = DatabaseStore
