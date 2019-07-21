const { toPairs } = require('lodash')

module.exports = (
  id,
  { productid, suppliername, producttype, name, description, price, supplierid, ...specialFields },
) => `
BEGIN;
UPDATE ${producttype}
SET ${toPairs(specialFields)
  .map(([colname, value]) => `${colname} = '${value}'`)
  .join(', ')}
WHERE ${producttype}.ProductId = ${id}
;
UPDATE Product
SET ${toPairs({ name, description, price, supplierid })
  .map(([colname, value]) => `${colname} = '${value}'`)
  .join(', ')}
WHERE Product.ProductId = ${id}
;
COMMIT;`
