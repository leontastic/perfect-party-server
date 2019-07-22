module.exports = () => `
SELECT
  Product.ProductId,
  Product.Name,
  Product.Description,
  Orders.EventId,
  Orders.OrderTime,
  Orders.Quantity,
  Orders.Price,
  Orders.Quantity * Orders.Price as Total
FROM Orders
INNER JOIN Product
ON Orders.ProductId = Product.ProductId
ORDER BY Orders.OrderTime DESC
;`
