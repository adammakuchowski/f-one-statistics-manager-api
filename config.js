const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    port: process.env.PORT || 3000,
    dbConnectionPath: process.env.DB_CONNECTION_PATH || 'mongodb://127.0.0.1:27017',
    dbName: process.env.DB_NAME || 'dbTest'
}
