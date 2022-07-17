const mongoose = require('mongoose')
const Driver = require('./driver')

const { Schema } = mongoose

const teamSchema = new Schema({
    name: String || Number,
    drivers: Array,
    country: String || Number,
    pointsInSeason: Number,
    worldChampionships: String || Number,
    dateCreation: Date || String
})

const Team = mongoose.model('Team', teamSchema, 'Teams')

module.exports = Team
