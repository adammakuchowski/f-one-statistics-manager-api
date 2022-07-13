const Driver = require('../../db/models/driver')

module.exports = {
    createDriver(request, response) {

        const newDriver = new Driver({
            // TODO create new driver
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
