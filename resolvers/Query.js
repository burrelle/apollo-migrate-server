const config = require('../config');
const knex = require('knex')(config);

const Query = {
  async books(parent, args, context, info) {
    return await knex.select().table('book');
  }
};

module.exports = Query;
