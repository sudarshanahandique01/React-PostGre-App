const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 14000;

// PostgreSQL client setup
const pool = new Pool({
  user: 'myuser',
  host: 'postgres',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

app.use(cors());
app.use(express.json());

// API endpoint to fetch student marks
app.get('/api/student-marks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM student_marks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Backend service running at http://localhost:${port}`);
});
