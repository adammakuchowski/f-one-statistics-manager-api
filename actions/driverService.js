const Driver = require('../db/models/driver')

class driverService {
    createDriver = async (body) => {
        if(!body.name || !body.surname || !body.number || !body.team) {
                return null
            }

        const newDriver = new Driver({
            name: body.name,
            surname: body.surname,
            number: body.number,
            age: body.age || '-',
            team: body.team,
            country: body.country || '-',
            podiumsInSeason: body.podiumsInSeason || '-',
            pointsInSeason: body.pointsInSeason || 0,
            podiumsInCareer: body.podiumsInCareer || '-',
            pointsInCareer: body.pointsInCareer || '-',
            grandsPrixEntered: body.grandsPrixEntered || '-',
            worldChampionships: body.worldChampionships || '-',
            dateOfBirth: body.dateOfBirth || '-',
            placeOfBirth: body.placeOfBirth || '-',
        })

        return newDriver
    }

    udpapteDriver = async (driverToUpdate, body) => {
        driverToUpdate.name = body.name || driverToUpdate.name,
        driverToUpdate.surname = body.surname || driverToUpdate.surname,
        driverToUpdate.number = body.number || driverToUpdate.number,
        driverToUpdate.age = body.age || driverToUpdate.age,
        driverToUpdate.team = body.team || driverToUpdate.team,
        driverToUpdate.country = body.country || driverToUpdate.country,
        driverToUpdate.podiumsInSeason = body.podiumsInSeason || driverToUpdate.podiumsInSeason,
        driverToUpdate.pointsInSeason = body.pointsInSeason || driverToUpdate.pointsInSeason,
        driverToUpdate.podiumsInCareer = body.podiumsInCareer || driverToUpdate.podiumsInCareer,
        driverToUpdate.pointsInCareer = body.pointsInCareer || driverToUpdate.pointsInCareer,
        driverToUpdate.grandsPrixEntered = body.grandsPrixEntered || driverToUpdate.grandsPrixEntered,
        driverToUpdate.worldChampionships = body.worldChampionships || driverToUpdate.worldChampionships,
        driverToUpdate.dateOfBirth = body.dateOfBirth || driverToUpdate.dateOfBirth,
        driverToUpdate.placeOfBirth = body.placeOfBirth || driverToUpdate.placeOfBirth

        return driverToUpdate
    }
}

module.exports = new driverService()
