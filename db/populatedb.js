#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();


const SQL = `
   CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR (50),
   message VARCHAR (500),
   timestamp TIMESTAMPTZ DEFAULT NOW()
   );
`

async function main() {
    console.log("Seeding...")
    const client = new Client({
        connectionString: process.env.DATABASE_URL ,
        ssl: {
            rejectUnauthorized: false, // allow self-signed certs (safe for most cloud dbs)
          },
        });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done");
}

main();