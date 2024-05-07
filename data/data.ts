import {sql} from '@vercel/postgres';
import { Trick } from '../types/types';

export async function fetchTricks() {
  try {
    const tricks = await sql`SELECT * FROM TRICKS`
    return tricks.rows as Trick[]

  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tricks data.');
  }
};

export async function fetchTrickById(id: string) {
  try {
    const trick = await sql`SELECT * FROM TRICKS WHERE trick_id = ${id}`
    return trick.rows[0] as Trick;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch trick with id of ${id}.`);
  }
}
