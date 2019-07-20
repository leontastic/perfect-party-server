const Host = require('./Host')
const Venue = require('./Venue')
const Event = require('./Event')
const Supplier = require('./Supplier')

module.exports = [Host, Venue, Event, Supplier].join('\n')
