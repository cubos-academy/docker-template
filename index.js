import express from 'express';
import pkg from 'pg';
const { Client } = pkg;

const app = express();
const port = 3001;

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({ API: 'OK' });
});

let client = null


router.get('/test', async (req, res) => {
    try {        
        client = new Client({
            host: 'postgres',
            port: 5432,
            database: 'mydatabase',
            user: 'postgres',
            password: 'postgres'
        });

        await client.connect();
        
        const results = await client.query('SELECT * FROM "user_test"');

        res.json(results.rows);
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
