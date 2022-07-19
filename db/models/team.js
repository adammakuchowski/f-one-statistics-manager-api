const mongoose = require('mongoose')
const Driver = require('./driver')

const { Schema } = mongoose

const teamSchema = new Schema({
    name: String || Number,
    driverNumbers: [String],
    country: String || Number,
    pointsInSeason: String || Number,
    worldChampionships: String || Number,
    dateCreation: Date || String
})

const Team = mongoose.model('Team', teamSchema, 'Teams')

module.exports = Team
