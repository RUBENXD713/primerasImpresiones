'use strict'
const Database = use('Database')
const Car = use('App/Models/Car')
const { validate } = use('Validator')

class FuncioneController {
    async consultaTodo () 
    {
        return await Database.table('cars')
    }
    async crear ({request, response}){
        const rules = {
            Modelo: 'required',
            Marca: 'required',
            Cantidad: 'required'
          }

        const validation = await validate(request.all(), rules)

          if (validation.fails()) {
            session
              .withErrors(validation.messages())
              .flashExcept([])
      
            return response.redirect('debes introducir todos los datos necesarios "modelo,Marca,Cantidad "')
          }  
        const data = request.all()

        const car = new Car()
        car.Modelo    = data.Modelo
        car.marca   = data.Marca
        car.cantidad = data.Cantidad

        try {
            await car.save()
            return response.json(car)
        } catch (error) {
            return response.json(Error)
        }      
    }
    async Eliminar (params) 
    {
        const rules = {
            id: 'required'
        }
        const {id} = params 
        const car = await Car.find(id)
        await car.delete()

        return response.json({Accion:"Modelo eliminado"})
    }
    async Actualizar (request, params)
    {
        const rules = {
            id:'required',
            modelo: 'required',
            Marca: 'required',
            Cantidad: 'required'
          }
        const {id} = params
        const datos = request.all()

        const car = await Car.find(id)
        car.Modelo    = datos.Modelo
        car.marca   = datos.Marca
        car.cantidad = datos.Cantidad

        try {
            await car.save()
            return response.json(car)
        } catch (error) {
            return response.json(Error)
        }
    }
}

module.exports = FuncioneController
