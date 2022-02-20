const mongoose = require('mongoose')

const JokeScheme = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeScheme)

module.exports = Joke