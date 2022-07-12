const express = require('express')
const router = express.Router()

const driverActions = require('../actions/api/drivers')

router.post('/createDriver', driverActions.createDriver)

module.exports = router
