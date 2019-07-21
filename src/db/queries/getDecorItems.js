module.exports = () => `
SELECT
  DecorItem.ProductId,
  DecorItem.Color,
  Product.Name,
  Product.Description,
  Product.Price,
  Product.SupplierId,
  Supplier.Name as SupplierName
FROM DecorItem
INNER JOIN Product
ON Product.ProductId = DecorItem.ProductId
INNER JOIN Supplier
ON Product.SupplierId = Supplier.SupplierId
`
