const express = require('express')
const {port} = require('./config')
const router = require('./routes/app')
const bodyParser = require('body-parser')
require('./db/mongoose')

const app = express()

app.use(bodyParser.json())

app.use('/app', router)

app.listen(port, () => {
    console.log(`API is listening on the port: ${port}`)
})
