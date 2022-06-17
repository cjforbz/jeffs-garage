import { Pool } from 'pg';
const connectionString: string =
  process.env.DATABASE_URL || 'postgresql://localhost:5432/jeffs_garage';

const pool = new Pool({
  connectionString,
});

pool.connect();

export default pool;
