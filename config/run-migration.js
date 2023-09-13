const knex = require('knex');
const config = require('./knexfile');

async function runMigration() {
  const db = knex(config.development);

  try {    
    await db.migrate.rollback();
    await db.migrate.latest();
    console.log('Migration executada com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao executar a migração:', error);
  } finally {
    
    await db.destroy();
  }
}

runMigration();
