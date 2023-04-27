const { db } = require('./config')
const { Pool } = require('pg')
const pool = new Pool(db)

module.exports = pool
