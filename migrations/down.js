const client = require('../src/db/client')
const dropTables = require('./dropTables')

console.log(dropTables)

const up = async () => {
  try {
    console.log(await client.query(dropTables))
  } catch (err) {
    console.error(err)
  }
}

up()
