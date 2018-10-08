'use strict'

const Model = use('Model')

class Conversation extends Model {
    static get connection () {
        return 'mysql'
    }

    static get table () {
        return 'conversation'
    }

    static get primaryKey () {
        return 'id'
    }
    
    static get createdAtColumn () {
        return ''
    }

    static get updatedAtColumn () {
        return ''
    }
}

module.exports = Conversation
