module.exports = records => `
INSERT INTO Orders (ProductId, EventId, Quantity, Price)
${records
  .map(({ productid, eventid, quantity }) =>
    [`SELECT ${productid}, ${eventid}, ${quantity}, Price`, `FROM Product WHERE ProductId = ${productid}`].join('\n'),
  )
  .join('\nUNION\n')}
;`
