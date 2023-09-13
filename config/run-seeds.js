const knex = require('knex');
const config = require('./knexfile');

async function runSeeds() {  
  const db = knex(config.development);

  try {    
    await db.seed.run();
    console.log('Seeds executadas com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao executar as seeds:', error);
  } finally {    
    await db.destroy();
  }
}

runSeeds();
