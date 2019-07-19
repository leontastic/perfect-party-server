const client = require('../db/client')
const {
  Host,
  Event,
  HostEvent,
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
  HostEvent,
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
