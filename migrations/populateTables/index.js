const Host = require('./Host')
const Venue = require('./Venue')
const Event = require('./Event')
const Supplier = require('./Supplier')
const Product = require('./Product')

module.exports = [Host, Venue, Event, Supplier, Product].join('\n')
