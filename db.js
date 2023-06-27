// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // or the port number you're using
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
