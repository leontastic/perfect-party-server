module.exports = () => `
SELECT
  SupplierId,
  Name,
  Email,
  Address
FROM Supplier
ORDER BY Name
`
