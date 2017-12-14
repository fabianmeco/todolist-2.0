module.exports = require('knex')({
    client: 'pg',
    connection: 'postgres://xthynrgq:oAZbEY-iZcCrfCBhftUZ3t-R2XO6Bzl7@baasu.db.elephantsql.com:5432/xthynrgq',
    searchPath:'public',
    pool:{
      min:2,
      max:10
    }
})