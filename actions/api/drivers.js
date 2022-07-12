const Driver = require('../../db/models/driver')

module.exports = {
    createDriver(request, response) {

        const newDriver = new Driver({
           // TODO create new driver
        })
        
        newDriver.save().then(() => {
            console.log('Driver has been successfully save in db')
        })

        response.send('Driver has been successfully created')
    }
}
