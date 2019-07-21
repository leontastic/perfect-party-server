module.exports = ({ firstname, lastname, phonenumber, email }) => `
INSERT INTO Host (FirstName, LastName, PhoneNumber, Email)
VALUES
  (${[firstname, lastname, phonenumber, email].map(value => `'${value}'`).join(',')})
;`
