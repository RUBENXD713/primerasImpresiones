'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ValidaEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const datos = await request.all()
    if (datos.edad < 18 ){
      return response.status(401).send('¡Edad no permitida!')
    }
    await next()
  }
}

module.exports = ValidaEdad
