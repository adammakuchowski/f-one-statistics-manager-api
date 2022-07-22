const express = require('express')
const router = express.Router()

const driverActions = require('../actions/driver')
const teamActions = require('../actions/team')

// Driver

// create new driver
router.post('/driver/create', driverActions.createDriver)

// get one driver
router.get('/driver/:number', driverActions.getDriverByNumber)

// get all drivers 
router.get('/drivers', driverActions.getAllDrivers)

// update one driver
router.put('/driver/update/:number', driverActions.updateDriver)

// delete one driver
router.delete('/driver/delete/:number', driverActions.deleteDriver)

// Team

// create new team
router.post('/team/create', teamActions.createTeam)

// get one team
router.get('/team/:name', teamActions.getTeamByName)

// get all teams 
router.get('/teams', teamActions.getAllTeams)

// update one team
router.put('/team/update/:name', teamActions.updateTeam)

// delete one team
router.delete('/team/delete/:name', teamActions.deleteTeam)

module.exports = router
