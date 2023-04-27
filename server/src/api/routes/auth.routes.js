const { Router } = require('express')
const { login, register } = require('../controllers/auth.controller')

const router = Router()

router.post('/auth/register', register)
router.post('/auth/login', login)

module.exports = router
