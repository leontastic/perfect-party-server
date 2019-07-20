const Router = require('koa-router')
const db = require('../db/client')
const getEvents = require('../db/queries/getEvents')
const getHosts = require('../db/queries/getHosts')
const getEventsByHostId = require('../db/queries/getEventsByHostId')
const getVenues = require('../db/queries/getVenues')

const router = new Router()

router.get('/current-time', async ctx => {
  ;({
    rows: [ctx.body],
  } = await db.query('SELECT NOW()'))
})

router.get('/hosts', async ctx => {
  ;({ rows: ctx.body } = await db.query(getHosts()))
})

router.get('/hosts/:hostId/events', async ctx => {
  ;({ rows: ctx.body } = await db.query(getEventsByHostId(ctx.params.hostId)))
})

router.get('/events', async ctx => {
  ;({ rows: ctx.body } = await db.query(getEvents()))
})

router.get('/venues', async ctx => {
  ;({ rows: ctx.body } = await db.query(getVenues()))
})

module.exports = router.routes()
