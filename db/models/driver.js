const mongoose = require('mongoose')

const Driver = mongoose.model('Driver', {
    name: String,
    surname: String,
    age: Number,
    team: String,
    country: String,
    podiumsInSeason: Number,
    pointsInSeason: Number,
    podiumsInCareer: Number,
    pointsInCareer: Number,
    grandsPrixEntered: Number,
    worldChampionships: Number,
    dateOfBirth: Date,
    placeOfBirth: String,
})

module.exports = Driver
