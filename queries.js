const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'personalbudget',
  password: 'postgres',
  port: 5432,
});