const express = require('express')
const {port} = require('./config')
const router = require('./routes/app')

require('./db/mongoose')
const app = express()

app.use('/', router)

app.listen(port, () => {
    console.log(`API is listening on the port: ${port}`)
})
