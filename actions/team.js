const Team = require('../db/models/team')
const teamService = require('./teamService')

class TeamActions {
    async createTeam(request, response) {
        const body = request.body

        const isTeamExists = await Team.findOne({name: body.name})

        if (isTeamExists) {
            return response.json(`Error: Team with name ${body.name} is already exists`)
        }

        const newTeam = await teamService.createTeam(body)
        if (!newTeam) {
            return response.json(`Error: Obligatory data to create new team: name`)
        }
         
        try {
            await newTeam.save()
        } catch (err) {
            return response.json(`Error while create new team ${err}`)
        }

        console.log('Team has been successfully created in db')
        response.json('Team has been successfully created')
    }

    async getTeamByName(request, response) {
        //TODO
    }

    async getAllTeams(request, response) {
        //TODO
    }

    async updateTeam(request, response) {
        //TODO
    }

    async deleteTeam(request, response) {
        //TODO
    }
}

module.exports = new TeamActions()
