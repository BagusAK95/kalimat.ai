'use strict'

const Model = use('Model')

class User extends Model {
    static get connection () {
        return 'mysql'
    }

    static get table () {
        return 'user'
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

module.exports = User
