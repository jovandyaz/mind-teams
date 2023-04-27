require('dotenv').config()

const config = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
    // port: process.env.DB_PORT,
    // ssl: true
  }
}

module.exports = config
