const Driver = require('../../db/models/driver')

module.exports = {
    createDriver(request, response) {

        const body = request.body

        const newDriver = new Driver({
            name: body.name,
            surname: body.surname,
            age: body.age,
            team: body.team,
            country: body.country,
            podiumsInSeason: body.podiumsInSeason,
            pointsInSeason: body.pointsInSeason,
            podiumsInCareer: body.podiumsInCareer,
            pointsInCareer: body.pointsInCareer,
            grandsPrixEntered: body.grandsPrixEntered,
            worldChampionships: body.worldChampionships,
            dateOfBirth: body.dateOfBirth,
            placeOfBirth: body.placeOfBirth,
        })

        newDriver.save().then(() => {
            console.log('Driver has been successfully save in db')
            response.send('Driver has been successfully created')
        }).catch((error) => {
            response.send(`Error while create new driver. Error ${error}`)
        })

    },
    getDriver(request, response) {


    },
    getAllDrivers(request, response) {


    },
    editDriver(request, response) {


    },
    deleteDriver(request, response) {


    },
}
