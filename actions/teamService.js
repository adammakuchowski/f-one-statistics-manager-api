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
}

module.exports = new teamService()
