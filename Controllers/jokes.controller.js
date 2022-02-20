const Joke = require('../Models/jokes.model')

//CRUD


//FindAll, FindOne, CreateNew, Update, Delete
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            console.log(allJokes)
            res.json({joke: allJokes})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

//FindOne
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            console.log(oneJoke)
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

//CreateNew
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            console.log(newJoke)
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

// on default. validators are only on POST req. not PUT req.
// so we add runValidators: true
//Update. Needs the req.body
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
    .then(updatedJoke => {
        console.log(updatedJoke)
        res.json({joke:updatedJoke})
    })
    .catch((err) => {
        res.json({message: 'Somthing went wrong', error: err})
    })
}

//Delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            console.log(result)
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}
