const client = require('../src/db/client')
const createTables = require('./createTables')
const populateTables = require('./populateTables')

const up = async () => {
  try {
    console.log(createTables)
    await client.query(createTables)
    console.log(populateTables)
    await client.query(populateTables)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

up()
