const client = require('../src/db/client')
const createTables = require('./createTables')
const populateTables = require('./populateTables')

console.log(createTables)
console.log(populateTables)

const up = async () => {
  try {
    console.log(await client.query(createTables))
    console.log(await client.query(populateTables))
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

up()
