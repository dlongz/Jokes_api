const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/JokesApi', {
    useNewUrlParser: true,
    useUnifiedtopology: true
})
    .then(() => console.log('We arrived at Jokes API Database. Please take off your shoes.'))
    .catch(err => console.log("Opps, I don't think is this the right place? Please check again.", err))