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
        const teamName = request.params.name

        let team 

        try {
            team = await Team.findOne({name: teamName})

            if (!team) {
                return response.json(`Team with name: ${teamName} doens't exist`)
            }
        } catch (err) {
            return response.json(`Error while get team ${err}`)
        }

        console.log(`Successful get team with name: ${teamName}`)
        response.json(team)
    }

    async getAllTeams(request, response) {
        let allTeams

        try {
            allTeams = await Team.find({})
            if (!allTeams) {
                return response.json('The teams base is empty')
            }
        } catch (err) {
            return response.json(`Error while get teams list by ${err}`)
        }

        response.json(allTeams)
    }

    async updateTeam(request, response) {
        const teamName = request.params.name

        let body = request.body
        //TODO block copy of drivers exists in other teams
        let newDrivers = body.driverNumbers

        const isTeamExists = await Team.findOne({name: body.name})

        if (isTeamExists) {
            return response.json(`Error: Team with name ${body.name} is already exists`)
        }

        let teamToUpdate = await Team.findOne({name: teamName})

        if (!teamToUpdate) {
            return response.json(`Team with name ${teamName} doesn't exists`)
        }

        teamToUpdate = await teamService.udpapteTeam(teamToUpdate, body)

        await teamToUpdate.save()

        response.send(`Team was sucessful update`)
    }

    async deleteTeam(request, response) {
        const teamName = request.params.name

        try {
            const teamToDelete = await Team.findOne({name: teamName})
            if(!teamToDelete) {
                return response.json(`Team with name ${teamName} doesn't exists`)
            }
            await Team.deleteOne({name: teamName})
        } catch (err) {
            return response.json(`Error while delete team ${err}`)
        }
        
        response.send(`Team was sucessful deleted`)
    }
}

module.exports = new TeamActions()
