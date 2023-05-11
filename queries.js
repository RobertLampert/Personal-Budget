const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'personalbudget',
  password: 'postgres',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createUser = (request, response) => {
  const {id, first_name, last_name, phone, address } = request.body[0];
  
  pool.query('INSERT INTO users (id, first_name, last_name, phone, address) VALUES ($1, $2, $3, $4, $5)', [id, first_name, last_name, phone, address], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${id}`)
  })
};

const updateUser = (request, response) => {
  const {id, first_name, last_name, phone, address } = request.body[0];
  
  pool.query(
    'UPDATE users SET first_name = $2, last_name = $3, phone = $4, address = $5 WHERE id = $1',
    [id,first_name, last_name, phone, address],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
};

const getEnvelopes = (request, response) => {
  pool.query('SELECT * FROM envelope ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getEnvelopeById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM envelope WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createEnvelope = (request, response) => {
  const {id, first_name, last_name, phone, address } = request.body[0];

  pool.query('INSERT INTO envelope (id, first_name, last_name, phone, address) VALUES ($1, $2, $3, $4, $5)', [id, first_name, last_name, phone, address], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
};

const updateEnvelope = (request, response) => {
  const id = parseInt(request.params.id)
  const { first_name, last_name, phone, address } = request.body

  pool.query(
    'UPDATE envelope SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5',
    [first_name, last_name, phone, address, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
};

const deleteEnvelope = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM envelope WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
};

const getTransactions = (request, response) => {
  pool.query('SELECT * FROM transactions ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTransactionById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM transactions WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createTransaction = (request, response) => {
  const {id, first_name, last_name, phone, address } = request.body[0];

  pool.query('INSERT INTO transactions (first_name, last_name, phone, address) VALUES ($1, $2, $3, $4)', [first_name, last_name, phone, address], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
};

const updateTransaction = (request, response) => {
  const id = parseInt(request.params.id)
  const { first_name, last_name, phone, address } = request.body

  pool.query(
    'UPDATE transactions SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5',
    [first_name, last_name, phone, address, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
};

const deleteTransaction = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM transactions WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
};

const getUserTransactions = (request, response) => {
  pool.query('SELECT * FROM user_transaction ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getUserTransactionById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM user_transactions WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getEnvelopes,
  getEnvelopeById,
  createEnvelope,
  updateEnvelope,
  deleteEnvelope,
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getUserTransactions,
  getUserTransactionById
};