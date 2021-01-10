'use strict'



/*
|--------------------------------------------------------------------------
| CarSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')


class CarSeeder {
  async run () {
    await Factory.model('app/Models/Car').createMany(7)
  }
}
module.exports = CarSeeder
