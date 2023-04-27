const pool = require('../../config/db')
const userQueries = require('../queries/users.queries')

// TODO: Implement valitation using Yup or Joi or express-validator or...
// TODO: Improve handler for errors using app.use middleware

const getAllUsers = async (req, res, netx) => {
  try {
    const result = await pool.query(userQueries.getAllUsers)
    res.send(result.rows)
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    netx(error)
  }
}

const getUser = async (req, res, netx) => {
  try {
    const { id } = req.params
    const result = await pool.query(userQueries.getUser, [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.send(result.rows[0])
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    netx(error)
  }
}

const createUser = async (req, res, netx) => {
  try {
    const { name, lastName, email, password, role, account, team, jobTitle, englishLevel, skills, resumeLink, status } = req.body
    console.log('🚀 ~ file: users.controller.js:34 ~ createUser ~ req.body:', req.body)
    // TODO: Encrypt password
    // TODO: Validate email, if exists handle UX
    const result = await pool.query(
      userQueries.createUser,
      [name, lastName, email, password, role, account, team, jobTitle, englishLevel, skills, resumeLink, status]
    )
    res.send(result.rows[0])
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    // duplicate key value violates unique constraint...
    netx(error)
  }
}

const deleteUser = async (req, res, netx) => {
  try {
    const { id } = req.params
    const result = await pool.query(userQueries.deleteUser, [id])
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.sendStatus(204)
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    netx(error)
  }
}

const updateUser = async (req, res, netx) => {
  try {
    const { id } = req.params
    const { name, email, password } = req.body
    console.log(id, name, email, password)
    const result = await pool.query(
      userQueries.updateUser,
      [name, email, password, id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.send(result.rows[0])
  } catch (error) {
    console.error('🚀 ~ error:', error.message)
    netx(error)
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}
