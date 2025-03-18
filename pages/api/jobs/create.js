import pool from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = verifyToken(token);
    if (decoded.role !== 'officer') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const { title, company, location, salary, description, requirements, deadline } = req.body;
    const [result] = await pool.query(
      `INSERT INTO jobs 
      (title, company, location, salary, description, requirements, deadline, posted_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, company, location, salary, description, requirements, deadline, decoded.id]
    );

    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Job creation failed' });
  }
}