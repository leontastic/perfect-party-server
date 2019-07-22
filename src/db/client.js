const { Client } = require('pg')
const { wrap } = require('lodash')

const client = new Client()
client.connect()
client.query = wrap(client.query.bind(client), (fn, query) => {
  console.info(query)
  return fn(query)
})

module.exports = client
