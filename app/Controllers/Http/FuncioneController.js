'use strict'
const Database = use('Database')
const Car = use('App/Models/Car')
const { validate } = use('Validator')
const rules = {
  Modelo: 'required',
  Marca: 'required',
  Cantidad: 'required'
}


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
              .flashExcept([Modelo,Marca,Cantidad])
      
            return response.redirect('back')
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


    async delete ({params, response}) 
    {
      const carro = await Car.find(params.id)
      if (await carro.delete())
        return { 'vehiculo': carro.toJSON()}
      return response.status(400).send('No se eliminó la información')
    }

    async Actualizar ({params, request, response})
    {
      const car = await Car.find(params.id)
      const validation = await validate(request.all(), rules)
        
      if (validation.fails()) 
            return response.status(400).send ({Error: 'Datos faltantes, no se actualizó'})

      car.Modelo = request.input('Modelo')
      car.marca = request.input('Marca')
      car.cantidad = request.input('Cantidad')
      
      if (await car.save())
          return { 'Datos actualizados': car.toJSON()}

      return response.status(400).send('Informacion no Actualizada')
    }
}

module.exports = FuncioneController
