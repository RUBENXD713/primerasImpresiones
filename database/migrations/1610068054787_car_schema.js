'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.timestamps()
      table.string('Modelo',200)
      table.string('marca',100)
      table.integer('cantidad')
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
