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
    await Database.table('cars').insert([
      {
        Modelo:'Camaro ',
        marca:'Chevrolet',
        cantidad:4
      },
      {
        Modelo:'Aveo',
        marca:'Chevrolet',
        cantidad:5
      },
      {
        Modelo:'California T',
        marca:'Ferrari',
        cantidad:5
      },
      {
        Modelo:'458',
        marca:'Ferrari',
        cantidad:1
      },
      {
        Modelo:'Fiesta',
        marca:'Ford',
        cantidad:7
      },
      {
        Modelo:'Model X',
        marca:'Tesla',
        cantidad:3
      },
    ])

    await Factory.model('App/Models/Car').createMany(10)
  }
}
module.exports = CarSeeder
