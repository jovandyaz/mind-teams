const userQueries = {
  getAllUsers: 'SELECT * FROM users',
  getUser: 'SELECT * FROM users WHERE id = $1',
  createUser: 'INSERT INTO users (name, last_name, email, password, role, account, team, job_title, english_level, skills, resume_link, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
  deleteUser: 'DELETE FROM users WHERE id = $1',
  updateUser: 'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *'
}

module.exports = userQueries
