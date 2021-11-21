const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const usersRoutes = require('./routes/users_routes')
const itemsRoutes = require('./routes/items_routes')
const teamsRoutes = require('./routes/teams_routes')

const config = require('./config')

const app = express()

const PORT = config.port

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// For serving frontend react app
app.use(express.static('public'))

// For keeping app awake
app.get('/online', (_req, res) => {
  res.send('<div>we are online</div>')
})

// Routes
app.use('/api/users', usersRoutes)
app.use('/api/items', itemsRoutes)
app.use('/api/teams', teamsRoutes)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
