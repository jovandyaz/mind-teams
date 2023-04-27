const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./api/routes/auth.routes')
const usersRoutes = require('./api/routes/users.routes')

const app = express()

const corsOptions = {
  origin: '*' // TODO: Change this to your own domain
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authRoutes)
app.use(usersRoutes)

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!'
  })
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found'
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Running server on port ${port}`))
