import {sql} from '@vercel/postgres';

export async function fetchTricks() {
  try {
    const tricks = await sql`SELECT * FROM TRICKS`
    return tricks.rows

  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tricks data.');
  }
};

export async function fetchTrickById(id) {
  try {
    const trick = await sql`SELECT * FROM TRICKS WHERE trick_id = ${id}`
    return trick.rows[0]
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch trick with id of ${id}.`);
  }
}