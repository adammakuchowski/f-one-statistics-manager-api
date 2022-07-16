const mongoose = require('mongoose')

const Driver = mongoose.model('Driver', {
    name: String || Number,
    surname: String || Number,
    number: String || Number,
    age: String || Number,
    team: String || Number,
    country: String || Number,
    podiumsInSeason: String || Number,
    pointsInSeason: Number,
    podiumsInCareer: String || Number,
    pointsInCareer: String || Number,
    grandsPrixEntered: String || Number,
    worldChampionships: String || Number,
    dateOfBirth: Date || String,
    placeOfBirth: String || Number,
})

module.exports = Driver
