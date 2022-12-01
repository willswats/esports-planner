import { createPool } from 'mysql2';

// Set MySQL database connection parameters
const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'node-esports',
  multipleStatements: true,
};

// Create a mySql connection pool
const pool = createPool(config);

// Export the pool for use elsewhere
export default pool;
