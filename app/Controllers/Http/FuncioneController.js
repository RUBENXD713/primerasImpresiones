'use strict'
const Database = use('Database')
const Car = use('App/Models/Car')

class FuncioneController {
    async consultaTodo () 
    {
        return await Database.table('cars')
    }
    async crear ({request, response}){
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
        const {id} = params
        const cars = await Car.all()  

        const car = await Car.find(id)
        await car.delete()

        return response.json({Accion:"Modelo eliminado"})
    }
    async Actualizar (request, params)
    {
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
