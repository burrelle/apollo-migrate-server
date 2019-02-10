const config = require('../config');
const knex = require('knex')(config);

const Mutation = {
  async addBook(parent, args, context, info) {
    const response = await knex('book')
      .returning(['title', 'author'])
      .insert({ ...args });
    return response[0];
  }
};

module.exports = Mutation;
