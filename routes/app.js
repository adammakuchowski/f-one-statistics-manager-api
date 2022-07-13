const express = require('express')
const router = express.Router()

const driverActions = require('../actions/api/drivers')

// create new driver
router.post('/driver/create', driverActions.createDriver)

// get one driver
router.get('/driver/{id}', driverActions.getDriver)

// get all drivers 
router.get('/drivers', driverActions.getAllDrivers)

// edit one driver
router.put('/drivers', driverActions.editDriver)

// delete one driver
router.post('/driver/delete/{id}', driverActions.deleteDriver)

module.exports = router
