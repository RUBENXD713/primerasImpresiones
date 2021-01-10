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
  async handle ({ request }, next) {
    if(request.get('edad')>17){
    await next()
    }
    return "Error Edad no valida"
  }
}

module.exports = ValidaEdad
