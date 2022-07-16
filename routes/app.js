const express = require('express')
const router = express.Router()

const driverActions = require('../actions/driver')

// create new driver
router.post('/driver/create', driverActions.createDriver)

// get one driver
router.get('/driver/:number', driverActions.getDriverByNumber)

// get all drivers 
router.get('/drivers', driverActions.getAllDrivers)

// update one driver
router.post('/driver/update/:number', driverActions.updateDriver)

// delete one driver
router.post('/driver/delete/:number', driverActions.deleteDriver)

module.exports = router
