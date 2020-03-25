const knex = require('knex'); 
const configuration = require('../../knexfile');
// conexao de desenvolviemnto
const connection = knex(configuration.development);

module.exports = connection;