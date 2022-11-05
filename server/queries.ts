import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  database: 'auth_express',
  port: 5432,
});

export default pool;
