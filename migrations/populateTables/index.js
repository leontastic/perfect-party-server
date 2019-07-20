const Host = require('./Host')
const Venue = require('./Venue')
const Event = require('./Event')

module.exports = [Host, Venue, Event].join('\n')
