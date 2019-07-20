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
} = require('./createTables')

const query = [
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
].join('\n')

console.log(query)

client.query(query)
  .then(console.log)
  .catch(console.error)
