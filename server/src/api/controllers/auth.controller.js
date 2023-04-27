require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('../../config/db')

const EXPIRATION_TIME = 86400 // 24 hours
// const EXPIRATION_TIME = 60 // 1 minute

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, encryptedPassword]
    )
    const user = result.rows[0]
    const accessToken = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: EXPIRATION_TIME
    })
    res.json({ accessToken })
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found or invalid password' })
    }
    const user = result.rows[0]
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(401).json({ message: 'User not found or invalid password' })
    }
    const accessToken = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: EXPIRATION_TIME
    })
    res.json({ accessToken })
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    next(error)
  }
}

module.exports = {
  register,
  login
}
