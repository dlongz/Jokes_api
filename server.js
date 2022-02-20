const express = require('express')
const app = express()
const port = 8000

require('./Config/mongoose.config')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const jokesRoutes = require('./Routes/jokes.routes')
jokesRoutes(app)

app.listen(port, () => console.log(`You have reached planet ${port}!`))