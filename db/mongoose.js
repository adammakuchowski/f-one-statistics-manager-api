const mongoose = require('mongoose')
const {dbConnectionPath, dbName} = require('../config')

mongoose.connect(`${dbConnectionPath}/${dbName}`)
