module.exports = () => `
SELECT
  FoodItem.ProductId,
  FoodItem.Cuisine,
  Product.Name,
  Product.Description,
  Product.Price,
  Product.SupplierId,
  Supplier.Name as SupplierName,
  'FoodItem' as ProductType
FROM FoodItem
INNER JOIN Product
ON Product.ProductId = FoodItem.ProductId
INNER JOIN Supplier
ON Product.SupplierId = Supplier.SupplierId
ORDER BY Product.Name
`
