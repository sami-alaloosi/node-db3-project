const knex = require('knex')

const knexflie = require('../knexfile')

const enviroment = process.env.NODE_ENV || "development"

const config = knexflie[enviroment]

module.exports = knex(config)