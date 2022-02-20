const jokeController = require('../Controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', jokeController.findAllJokes)
    app.get('/api/jokes/:id', jokeController.findOneJoke)
    app.put('/api/jokes/:id', jokeController.updateJoke)
    app.post('/api/jokes', jokeController.createNewJoke)
    app.delete('/api/jokes/:id', jokeController.deleteJoke)
}