require('dotenv').config()
const jwt = require('jsonwebtoken')
const pool = require('../../config/db')
const userQueries = require('../queries/users.queries')

const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' })
  }
  console.log('🚀 ~ file: auth.js:7 ~ verifyToken ~ token:', token)

  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    req.userId = decoded.id

    const user = await pool.query(userQueries.getUser, [req.userId])
    if (!user) return res.status(404).json({ message: 'User not found' })

    next()
  } catch (error) {
    return res.status(401).json({ message: error.message || 'Unauthorized' })
  }
}

const auth = {
  verifyToken
}

module.exports = auth
