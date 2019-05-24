const db = require('./db.config')

module.exports = {
    insert,
    getAll,
  
  };

async function insert(game) {
    const  [ id ]  = await db('games').insert(game, 'id');
  
    return db('games')
      .where({ id })
      .first();
  }

function getAll() {
    return db('games');
  }