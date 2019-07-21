const Host = 'DROP TABLE IF EXISTS Host;'
const Event = 'DROP TABLE IF EXISTS Event;'
const Venue = 'DROP TABLE IF EXISTS Venue;'
const Supplier = 'DROP TABLE IF EXISTS Supplier;'
const Product = 'DROP TABLE IF EXISTS Product;'
const Order = 'DROP TABLE IF EXISTS Orders;'
const Discount = 'DROP TABLE IF EXISTS Discount;'
const ParadeFloat = 'DROP TABLE IF EXISTS ParadeFloat;'
const FoodItem = 'DROP TABLE IF EXISTS FoodItem;'
const DecorItem = 'DROP TABLE IF EXISTS DecorItem;'
const Entertainment = 'DROP TABLE IF EXISTS Entertainment;'
const DietaryRestriction = 'DROP TABLE IF EXISTS DietaryRestriction;'
const DietaryRestrictionAppliesTo = 'DROP TABLE IF EXISTS DietaryRestrictionAppliesTo;'

module.exports = [
  Order,
  DietaryRestrictionAppliesTo,
  DietaryRestriction,
  ParadeFloat,
  FoodItem,
  DecorItem,
  Entertainment,
  Discount,
  Product,
  Supplier,
  Event,
  Venue,
  Host,
].join('\n')
