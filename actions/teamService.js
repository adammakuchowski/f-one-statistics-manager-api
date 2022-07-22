const Team = require('../db/models/team')

class teamService {
    createTeam = async (body) => {
        if (!body.name) {
            return null
        }

        const newTeam = new Team({
            name: body.name,
            driverNumbers: body.driverNumbers || [],
            country: body.country || '-',
            pointsInSeason: body.pointsInSeason || '-',
            worldChampionships: body.worldChampionships || '-',
            dateCreation: body.dateCreation || '-',
        })

        return newTeam
    }

    isTeamCanBeUpdate = async (teamToUpdate, body) => {
        

    }

    udpapteTeam = async (teamToUpdate, body) => {
        teamToUpdate.name = body.name || teamToUpdate.name,
        teamToUpdate.driverNumbers =  body.driverNumbers || teamToUpdate.driverNumbers,
        teamToUpdate.country = body.country || teamToUpdate.country,
        teamToUpdate.pointsInSeason = body.pointsInSeason || teamToUpdate.pointsInSeason,
        teamToUpdate.worldChampionships = body.worldChampionships || teamToUpdate.worldChampionships,
        teamToUpdate.dateCreation = body.dateCreation || teamToUpdate.dateCreation

        return teamToUpdate
    }
}

module.exports = new teamService()
