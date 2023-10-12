// src/index.ts
import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({ API: 'OK' });
});

let client: Client;

router.get('/test', async (req, res) => {
    try {
        if (
            process.env.HOST_ENV &&
            process.env.PORT_ENV &&
            process.env.DATABASE_ENV &&
            process.env.USERNAME_ENV &&
            process.env.PASSWORD_ENV
        ) {
            client = new Client({
                host: process.env.HOST_ENV,
                port: parseInt(process.env.PORT_ENV, 10),
                database: process.env.DATABASE_ENV,
                user: process.env.USERNAME_ENV,
                password: process.env.PASSWORD_ENV,
            });

            await client.connect();

            const results = await client.query('SELECT * FROM "user_test"');

            res.json(results.rows);
        } else {
            throw new Error('Variáveis de ambiente não definidas');
        }
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
    } finally {
        if (client) {
            await client.end();
        }
    }
});

app.use('/', router);

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
