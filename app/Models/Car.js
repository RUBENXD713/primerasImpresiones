'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Car extends Model {
    static get table() {
        return 'cars'
    }
}

module.exports = Car
