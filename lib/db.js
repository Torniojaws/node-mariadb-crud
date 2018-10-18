const mariadb = require('mariadb');

// Optimally these are defined in a secret storage like Ansible Vault, AWS Secrets Manager, etc.
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'nodetester',
  password: 'testinode',
  database: 'nodetest',
  connectionLimit: 5,
});

/**
 * Runs an arbitrary parametrized query.
 * @param {string} q contains the SQL query to run
 * @param {array} params has the query parameters to apply
 * @return {array} the results of the query
 */
const query = async (q, params) => {
  const conn = await pool.getConnection();
  const result = await conn.query(q, params);
  if (conn) conn.end();
  // When doing INSERT, UPDATE
  if ('affectedRows' in result) {
    return [];
  }
  return result.map(row => row);
};

module.exports = {
  query,
};
