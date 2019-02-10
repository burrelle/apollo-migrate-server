const config = require('../config');
const knex = require('knex')(config);

const Query = {
  books: () => knex.select().table('book')
}

module.exports = Query;
