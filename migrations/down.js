const client = require('../src/db/client')
const dropTables = require('./dropTables')

const down = async () => {
  try {
    console.log(dropTables)
    await client.query(dropTables)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

down()
