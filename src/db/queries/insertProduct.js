module.exports = specialEntity => ({ name, description, price, supplierid, ...specialFields }) => `
WITH NewProduct AS (
  INSERT INTO Product (Name, Description, Price, SupplierId)
  VALUES ('${name}', '${description}', ${price}, ${supplierid})
  RETURNING ProductId
)
INSERT INTO ${specialEntity} (${['ProductId', ...Object.keys(specialFields)].join(', ')})
SELECT ${['ProductId', ...Object.values(specialFields).map(field => `'${field}'`)].join(', ')}
FROM NewProduct
;`
