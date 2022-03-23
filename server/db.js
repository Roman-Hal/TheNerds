import { Pool } from "pg";
import dotenv from "dotenv";


dotenv.config();

//const isProduction = process.env.NODE_ENV === "production";
//const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, 
    connectionTimeoutMillis: 5000,
    ssl: {
        rejectUnauthorized: false,
    },
});




export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};


export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
