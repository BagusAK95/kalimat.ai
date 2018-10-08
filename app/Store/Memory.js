'use strict'

const Redis = use('Redis')

const MemoryStore = {
  get: async (table, id) => {
    try {
      const data = await Redis.hget(table, id)

      return {
        success: true,
        message: JSON.parse(data)
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }, 

  list: async(table, page, limit) => {
    try {
      const skip = (page * limit) - limit
      const data = await Redis.hvals(table)

      return {
        success: true,
        message: data.map(e => JSON.parse(e)).slice(skip, Number(limit) + Number(skip))
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  },

  create: async (table, data) => {
    try {
      const len = await Redis.hlen(table)
      data.id = len + 1

      await Redis.hset(table, data.id, JSON.stringify(data))

      return {
        success: true,
        message: data.id
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  },
  
  update: async (table, id, data) => {
    try {
      data.id = id

      await Redis.hset(table, id, JSON.stringify(data))

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
      await Redis.hdel(table, id)

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

module.exports = MemoryStore
