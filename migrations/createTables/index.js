const Host = `CREATE TABLE Host (
  HostId SERIAL PRIMARY KEY NOT NULL,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  PhoneNumber VARCHAR(255),
  Email VARCHAR(255)
);`

const Event = `CREATE TABLE Event (
  EventId SERIAL PRIMARY KEY NOT NULL,
  HostId INT,
  EventName VARCHAR(255),
  FOREIGN KEY (HostId) REFERENCES Host
);`

const Venue = `CREATE TABLE Venue (
  VenueId SERIAL PRIMARY KEY NOT NULL,
  Name VARCHAR(255),
  Address VARCHAR(255),
  Price DECIMAL(9,2)
);`

const HeldAt = `CREATE TABLE HeldAt (
  VenueId INT,
  EventId INT,
  StartDate DATE,
  EndDate DATE,
  Cost INT,
  PRIMARY KEY (VenueId, EventId),
  FOREIGN KEY (VenueId) REFERENCES Venue,
  FOREIGN KEY (EventId) REFERENCES Event
);`

const Supplier = `CREATE TABLE Supplier (
  SupplierId SERIAL PRIMARY KEY NOT NULL,
  Name VARCHAR(255),
  Email VARCHAR(255),
  Address VARCHAR(255)
);`

const Product = `CREATE TABLE Product (
  ProductId INT PRIMARY KEY,
  Name VARCHAR(255),
  Price DECIMAL(9,2),
  Description VARCHAR(255),
  SupplierId INT,
  FOREIGN KEY (SupplierId) REFERENCES Supplier
);`

const Order = `CREATE TABLE Orders (
  OrderId SERIAL PRIMARY KEY NOT NULL,
  EventId INT,
  ProductId INT,
  Quantity INT,
  Cost DECIMAL(9,2),
  FOREIGN KEY (EventId) REFERENCES Event,
  FOREIGN KEY (ProductId) REFERENCES Product
);`

const Discount = `CREATE TABLE Discount (
  ProductId SERIAL PRIMARY KEY NOT NULL,
  DiscountValue DECIMAL(4,4),
  FOREIGN KEY (ProductId) REFERENCES Product
);`

const ParadeFloat = `CREATE TABLE ParadeFloat (
  ProductId INT,
  Height INT,
  Width INT,
  Length INT,
  Weight INT,
  MaxSpeed INT,
  FOREIGN KEY (ProductId) REFERENCES Product
);`

const FoodItem = `CREATE TABLE FoodItem (
  ProductId INT PRIMARY KEY,
  Cuisine VARCHAR(255),
  FOREIGN KEY (ProductId) REFERENCES Product
);`

const DecorItem = `CREATE TABLE DecorItem (
  ProductId INT PRIMARY KEY,
  Color VARCHAR(255),
  FOREIGN KEY (ProductId) REFERENCES Product
);`

const Entertainment = `CREATE TABLE Entertainment (
  ProductId INT PRIMARY KEY,
  AgeRestriction INT,
  FOREIGN KEY (ProductId) REFERENCES Product
);`

const DietaryRestriction = `CREATE TABLE DietaryRestriction (
  RestrictionId SERIAL PRIMARY KEY NOT NULL,
  Description VARCHAR(255)
);`

const DietaryRestrictionAppliesTo = `CREATE TABLE DietaryRestrictionAppliesTo (
  ProductId INT,
  RestrictionId INT,
  PRIMARY KEY (ProductId, RestrictionId),
  FOREIGN KEY (ProductId) REFERENCES FoodItem,
  FOREIGN KEY (RestrictionId) REFERENCES DietaryRestriction
);`

module.exports = [
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
