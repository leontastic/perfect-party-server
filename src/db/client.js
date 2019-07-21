const { Client } = require('pg')
const { wrap } = require('lodash')

const client = new Client()
client.connect()
client.query = wrap(client.query.bind(client), async (fn, query) => {
  console.info(query)
  const result = await fn(query)
  console.log(result)
  return result
})

module.exports = client
