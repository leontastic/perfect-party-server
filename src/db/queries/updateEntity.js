const { toPairs } = require('lodash')
module.exports = (entity, pk) => (id, record) => `
UPDATE ${entity}
SET ${toPairs(record)
  .map(([colname, value]) => `${colname} = '${value}'`)
  .join(', ')}
WHERE ${pk} = ${id}
;`
