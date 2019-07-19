module.exports.Host =
  `CREATE TABLE Host (
    HostId SERIAL PRIMARY KEY NOT NULL,
    FirstName VARCHAR(255),
    PhoneNumber VARCHAR(255),
    Email VARCHAR(255)
  );`

module.exports.Event =
  `CREATE TABLE Event (
    EventId SERIAL PRIMARY KEY NOT NULL
  );`

module.exports.HostEvent =
  `CREATE TABLE HostEvent (
    HostId INT,
    EventId INT,
    PRIMARY KEY (HostId, EventId),
    FOREIGN KEY (HostId) REFERENCES Host,
    FOREIGN KEY (EventId) REFERENCES Event
  );`

module.exports.Venue =
  `CREATE TABLE Venue (
    VenueId SERIAL PRIMARY KEY NOT NULL,
    Name VARCHAR(255),
    Address VARCHAR(255),
    Price DECIMAL(9,2)
  );`

module.exports.HeldAt =
  `CREATE TABLE HeldAt (
    VenueId INT,
    EventId INT,
    StartDate DATE,
    EndDate DATE,
    Cost INT,
    PRIMARY KEY (VenueId, EventId),
    FOREIGN KEY (VenueId) REFERENCES Venue,
    FOREIGN KEY (EventId) REFERENCES Event
  );`

module.exports.Supplier =
  `CREATE TABLE Supplier (
    SupplierId SERIAL PRIMARY KEY NOT NULL,
    Name VARCHAR(255),
    Email VARCHAR(255),
    Address VARCHAR(255)
  );`

module.exports.Product =
  `CREATE TABLE Product (
    ProductId INT PRIMARY KEY,
    Name VARCHAR(255),
    Price DECIMAL(9,2),
    Description VARCHAR(255),
    SupplierId INT,
    FOREIGN KEY (SupplierId) REFERENCES Supplier
  );`

module.exports.Order =
  `CREATE TABLE Orders (
    OrderId SERIAL PRIMARY KEY NOT NULL,
    EventId INT,
    ProductId INT,
    Quantity INT,
    Cost DECIMAL(9,2),
    FOREIGN KEY (EventId) REFERENCES Event,
    FOREIGN KEY (ProductId) REFERENCES Product
  );`

module.exports.Discount =
  `CREATE TABLE Discount (
    ProductId SERIAL PRIMARY KEY NOT NULL,
    DiscountValue DECIMAL(4,4),
    FOREIGN KEY (ProductId) REFERENCES Product
  );`

module.exports.ParadeFloat =
  `CREATE TABLE ParadeFloat (
    ProductId INT,
    Height INT,
    Width INT,
    Length INT,
    Weight INT,
    MaxSpeed INT,
    FOREIGN KEY (ProductId) REFERENCES Product
  );`

module.exports.FoodItem =
  `CREATE TABLE FoodItem (
    ProductId INT PRIMARY KEY,
    Cuisine VARCHAR(255),
    FOREIGN KEY (ProductId) REFERENCES Product
  );`

module.exports.DecorItem =
  `CREATE TABLE DecorItem (
    ProductId INT PRIMARY KEY,
    Color VARCHAR(255),
    FOREIGN KEY (ProductId) REFERENCES Product
  );`

module.exports.Entertainment =
  `CREATE TABLE Entertainment (
    ProductId INT PRIMARY KEY,
    AgeRestriction INT,
    FOREIGN KEY (ProductId) REFERENCES Product
  );`

module.exports.DietaryRestriction =
  `CREATE TABLE DietaryRestriction (
    RestrictionId SERIAL PRIMARY KEY NOT NULL,
    Description VARCHAR(255)
  );`

module.exports.DietaryRestrictionAppliesTo =
  `CREATE TABLE DietaryRestrictionAppliesTo (
    ProductId INT,
    RestrictionId INT,
    PRIMARY KEY (ProductId, RestrictionId),
    FOREIGN KEY (ProductId) REFERENCES FoodItem,
    FOREIGN KEY (RestrictionId) REFERENCES DietaryRestriction
  );`
