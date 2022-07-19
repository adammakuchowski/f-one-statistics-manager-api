const Driver = require('../db/models/driver')
const driverService = require('./driverService')

class DriverActions {
    async createDriver(request, response) {
        const body = request.body

        const isNumberExists = await Driver.findOne({number: body.number})

        if (isNumberExists) {
            return response.json(`Error: Driver with number ${body.number} is already exists`)
        }

        const newDriver = await driverService.createDriver(body)
        if (!newDriver) {
            return response.json(`Error: Obligatory data to create new driver: name, surname, number and team.`)
        }

        try {
            await newDriver.save()
        } catch (err) {
            return response.json(`Error while create new driver. ${err}`)
        }

        console.log('Driver has been successfully created in db')
        response.json('Driver has been successfully created')
    }

    async getDriverByNumber(request, response) {
        const driverNumber = request.params.number
        let driver

        try {
            driver = await Driver.findOne({number: driverNumber})

            if (!driver) {
                return response.json(`Driver with number: ${driverNumber} doens't exist`)
            }
        } catch (err) {
            return response.json(`Error while get driver by ${err}`)
        }

        console.log(`Successful get driver with number: ${driverNumber}`)
        response.json(driver)
    }

    async getAllDrivers(request, response) {
        let allDrivers

        try {
            allDrivers = await Driver.find({})
            if (!allDrivers) {
                return response.json('The driver base is empty')
            }
        } catch (err) {
            return response.json(`Error while get dirvers list by ${err}`)
        }

        response.json(allDrivers)
    }

    async updateDriver(request, response) {
        const driverNumber = request.params.number

        let body = request.body

        const isNumberExists = await Driver.findOne({number: body.number})

        if (isNumberExists) {
            return response.json(`Error: Driver with number ${body.number} is already exists`)
        }

        let driverToUpdate = await Driver.findOne({number: driverNumber})

        if (!driverToUpdate) {
            return response.json(`Driver with number ${driverNumber} doesn't exists`)
        }

        driverToUpdate = await driverService.udpapteDriver(driverToUpdate, body)

        await driverToUpdate.save()

        response.send(`Driver was sucessful update`)
    }
    
    async deleteDriver(request, response) {
        const driverNumber = request.params.number

        try {
            const driverToDelete = await Driver.findOne({number: driverNumber})
            if(!driverToDelete) {
                return response.json(`Driver with number ${driverNumber} doesn't exists`)
            }
            await Driver.deleteOne({number: driverNumber})
        } catch (err) {
            return response.json(`Error while delete driver ${err}`)
        }
        
        response.send(`Driver was sucessful deleted`)
    }
}

module.exports = new DriverActions()
