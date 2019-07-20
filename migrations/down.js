const client = require('../src/db/client')
const dropTables = require('./dropTables')

console.log(dropTables)

const down = async () => {
  try {
    console.log(await client.query(dropTables))
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

down()
