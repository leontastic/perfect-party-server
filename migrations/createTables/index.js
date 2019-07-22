const Host = `CREATE TABLE IF NOT EXISTS Host (
  HostId SERIAL PRIMARY KEY NOT NULL,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  PhoneNumber VARCHAR(255),
  Email VARCHAR(255)
);`

const Venue = `CREATE TABLE IF NOT EXISTS Venue (
  VenueId SERIAL PRIMARY KEY NOT NULL,
  Name VARCHAR(255),
  Address VARCHAR(255),
  Price DECIMAL(9,2)
);`

const Event = `CREATE TABLE IF NOT EXISTS Event (
  EventId SERIAL PRIMARY KEY NOT NULL,
  EventName VARCHAR(255),
  EventDate DATE,
  HostId INT,
  VenueId INT,
  VenuePrice DECIMAL(9,2),
  FOREIGN KEY (HostId) REFERENCES Host ON DELETE CASCADE,
  FOREIGN KEY (VenueId) REFERENCES Venue ON DELETE CASCADE
);`

const Supplier = `CREATE TABLE IF NOT EXISTS Supplier (
  SupplierId SERIAL PRIMARY KEY NOT NULL,
  Name VARCHAR(255),
  Email VARCHAR(255),
  Address VARCHAR(255)
);`

const Product = `CREATE TABLE IF NOT EXISTS Product (
  ProductId SERIAL PRIMARY KEY NOT NULL,
  Name VARCHAR(255),
  Description VARCHAR(255),
  Price DECIMAL(9,2),
  SupplierId INT,
  FOREIGN KEY (SupplierId) REFERENCES Supplier ON DELETE CASCADE
);`

const Order = `CREATE TABLE IF NOT EXISTS Orders (
  OrderId SERIAL PRIMARY KEY NOT NULL,
  EventId INT,
  ProductId INT,
  Quantity INT,
  OrderTime TIMESTAMP NOT NULL DEFAULT NOW(),
  Price DECIMAL(9,2),
  FOREIGN KEY (EventId) REFERENCES Event ON DELETE CASCADE,
  FOREIGN KEY (ProductId) REFERENCES Product ON DELETE CASCADE
);`

const Discount = `CREATE TABLE IF NOT EXISTS Discount (
  ProductId SERIAL PRIMARY KEY NOT NULL,
  DiscountValue DECIMAL(4,4),
  FOREIGN KEY (ProductId) REFERENCES Product ON DELETE CASCADE
);`

const ParadeFloat = `CREATE TABLE IF NOT EXISTS ParadeFloat (
  ProductId INT,
  Height INT,
  Width INT,
  Length INT,
  Weight INT,
  MaxSpeed INT,
  FOREIGN KEY (ProductId) REFERENCES Product ON DELETE CASCADE
);`

const FoodItem = `CREATE TABLE IF NOT EXISTS FoodItem (
  ProductId INT PRIMARY KEY,
  Cuisine VARCHAR(255),
  FOREIGN KEY (ProductId) REFERENCES Product ON DELETE CASCADE
);`

const DecorItem = `CREATE TABLE IF NOT EXISTS DecorItem (
  ProductId INT PRIMARY KEY,
  Color VARCHAR(255),
  FOREIGN KEY (ProductId) REFERENCES Product ON DELETE CASCADE
);`

const Entertainment = `CREATE TABLE IF NOT EXISTS Entertainment (
  ProductId INT PRIMARY KEY,
  AgeRestriction INT,
  FOREIGN KEY (ProductId) REFERENCES Product ON DELETE CASCADE
);`

const DietaryRestriction = `CREATE TABLE IF NOT EXISTS DietaryRestriction (
  RestrictionId SERIAL PRIMARY KEY NOT NULL,
  Description VARCHAR(255)
);`

const DietaryRestrictionAppliesTo = `CREATE TABLE IF NOT EXISTS DietaryRestrictionAppliesTo (
  ProductId INT,
  RestrictionId INT,
  PRIMARY KEY (ProductId, RestrictionId),
  FOREIGN KEY (ProductId) REFERENCES FoodItem ON DELETE CASCADE,
  FOREIGN KEY (RestrictionId) REFERENCES DietaryRestriction ON DELETE CASCADE
);`

module.exports = [
  Host,
  Venue,
  Event,
  Supplier,
  Product,
  ParadeFloat,
  FoodItem,
  DietaryRestriction,
  DietaryRestrictionAppliesTo,
  DecorItem,
  Entertainment,
  Discount,
  Order,
].join('\n')
