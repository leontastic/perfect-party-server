module.exports = () => `
SELECT
  Entertainment.ProductId,
  Entertainment.AgeRestriction,
  Product.Name,
  Product.Description,
  Product.Price,
  Product.SupplierId,
  Supplier.Name as SupplierName,
  'Entertainment' as ProductType
FROM Entertainment
INNER JOIN Product
ON Product.ProductId = Entertainment.ProductId
INNER JOIN Supplier
ON Product.SupplierId = Supplier.SupplierId
ORDER BY Product.Name
`
