const { Router } = require('express')
const { auth } = require('../middlewares')
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/users.controller')

const router = Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUser)
router.post('/users', auth.verifyToken, createUser)
router.delete('/users/:id', auth.verifyToken, deleteUser)
router.put('/users/:id', auth.verifyToken, updateUser)

module.exports = router
