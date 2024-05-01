const { db } = require('@vercel/postgres');
const tricks = require('../data/tricks.ts');

async function seedTricks(client) {
    try {
        await client.sql`
            CREATE TABLE IF NOT EXISTS tricks (
                trick_id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                trick_type VARCHAR(100) NOT NULL,
                difficulty VARCHAR(100) NOT NULL,
                description TEXT,
                variation VARCHAR(100) NOT NULL,
                status VARCHAR(100) NOT NULL
            );
        `;

        console.log('Created "tricks" table');

        const insertedTricks = await Promise.all(
            tricks.map(trick => {
                return client.sql`
                    INSERT INTO tricks (name, trick_type, difficulty, description, variation, status)
                    VALUES (${trick.name}, ${trick.trickType}, ${trick.difficulty}, ${trick.description}, ${trick.variation}, ${trick.status})
                    ON CONFLICT DO NOTHING;
                `;
            }),
        );

        console.log('Inserted tricks:', insertedTricks.length);
    } catch (error) {
        console.error('Error seeding tricks:', error.message);
    }
}

async function main() {
    const client = db.connect();
    await seedTricks(client);
    await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

