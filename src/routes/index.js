const Router = require('koa-router')
const db = require('../db/client')
const getEvents = require('../db/queries/getEvents')
const getHostsWithEventCount = require('../db/queries/getHostsWithEventCount')
const getEventsByHostId = require('../db/queries/getEventsByHostId')
const getVenues = require('../db/queries/getVenues')
const getSuppliers = require('../db/queries/getSuppliers')
const insertEntity = require('../db/queries/insertEntity')
const updateEntity = require('../db/queries/updateEntity')
const deleteEntity = require('../db/queries/deleteEntity')

const router = new Router()

router.get('/current-time', async ctx => {
  ;({
    rows: [ctx.body],
  } = await db.query('SELECT NOW()'))
})

const createBasicRoutes = (
  entity,
  { create: createQuery, index: indexQuery, update: updateQuery, delete: deleteQuery },
) => {
  const handleIndex = async ctx => ({ rows: ctx.body } = await db.query(indexQuery()))
  const handleCreate = async ctx => ({ rows: ctx.body } = await db.query(createQuery(ctx.request.body)))
  const handleUpdate = async ctx => ({ rows: ctx.body } = await db.query(updateQuery(ctx.params.id, ctx.request.body)))
  const handleDelete = async ctx => ({ rows: ctx.body } = await db.query(deleteQuery(ctx.params.id)))
  router.get(`/${entity}`, handleIndex)
  router.post(`/${entity}`, handleCreate)
  router.put(`/${entity}/:id`, handleUpdate)
  router.delete(`/${entity}/:id`, handleDelete)
}

createBasicRoutes('hosts', {
  create: insertEntity('Host', 'HostId'),
  index: getHostsWithEventCount,
  update: updateEntity('Host', 'HostId'),
  delete: deleteEntity('Host', 'HostId'),
})

createBasicRoutes('suppliers', {
  create: insertEntity('Supplier', 'SupplierId'),
  index: getSuppliers,
  update: updateEntity('Supplier', 'SupplierId'),
  delete: deleteEntity('Supplier', 'SupplierId'),
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
