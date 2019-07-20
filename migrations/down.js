const client = require('../src/db/client')
const {
  Host,
  Event,
  Venue,
  HeldAt,
  Supplier,
  Product,
  Order,
  Discount,
  ParadeFloat,
  FoodItem,
  DecorItem,
  Entertainment,
  DietaryRestriction,
  DietaryRestrictionAppliesTo,
} = require('./deleteTables')

const query = [
  HeldAt,
  Order,
  Discount,
  DietaryRestrictionAppliesTo,
  DietaryRestriction,
  ParadeFloat,
  FoodItem,
  DecorItem,
  Entertainment,
  Product,
  Supplier,
  Event,
  Host,
  Venue,
].join('\n')

console.log(query)

client.query(query)
  .then(console.log)
  .catch(console.error)
