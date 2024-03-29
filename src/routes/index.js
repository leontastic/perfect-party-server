const Router = require('koa-router')
const { concat } = require('lodash')
const db = require('../db/client')
const getEvents = require('../db/queries/getEvents')
const getHostsWithEventCount = require('../db/queries/getHostsWithEventCount')
const getVenues = require('../db/queries/getVenues')
const getSuppliers = require('../db/queries/getSuppliers')
const insertEntity = require('../db/queries/insertEntity')
const updateEntity = require('../db/queries/updateEntity')
const deleteEntity = require('../db/queries/deleteEntity')
const getFoodItems = require('../db/queries/getFoodItems')
const getDecorItems = require('../db/queries/getDecorItems')
const getEntertainment = require('../db/queries/getEntertainment')
const insertProduct = require('../db/queries/insertProduct')
const updateProduct = require('../db/queries/updateProduct')
const insertEvent = require('../db/queries/insertEvent')
const updateEvent = require('../db/queries/updateEvent')
const insertOrders = require('../db/queries/insertOrders')
const getOrders = require('../db/queries/getOrders')

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
  if (createQuery) {
    const handleCreate = async ctx => {
      console.log(ctx.request.body)
      const res = await db.query(createQuery(ctx.request.body))
      console.log(res)
      ;({ rows: ctx.body } = res)
    }
    router.post(`/${entity}`, handleCreate)
  }
  if (indexQuery) {
    const handleIndex = async ctx => ({ rows: ctx.body } = await db.query(indexQuery()))
    router.get(`/${entity}`, handleIndex)
  }
  if (updateQuery) {
    const handleUpdate = async ctx => {
      await db.query(updateQuery(ctx.params.id, ctx.request.body))
      ctx.body = []
    }
    router.put(`/${entity}/:id`, handleUpdate)
  }
  if (deleteQuery) {
    const handleDelete = async ctx => {
      await db.query(deleteQuery(ctx.params.id))
      ctx.body = []
    }
    router.delete(`/${entity}/:id`, handleDelete)
  }
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

createBasicRoutes('products', {
  create: insertProduct,
  update: updateProduct,
  delete: deleteEntity('Product', 'ProductId'),
})

router.get('/products', async ctx => {
  ctx.body = concat(
    ...(await Promise.all([getFoodItems, getDecorItems, getEntertainment].map(query => db.query(query())))).map(
      ({ rows }) => rows,
    ),
  )
})

createBasicRoutes('venues', {
  create: insertEntity('Venue', 'VenueId'),
  index: getVenues,
  update: updateEntity('Venue', 'VenueId'),
  delete: deleteEntity('Venue', 'VenueId'),
})

createBasicRoutes('events', {
  create: insertEvent,
  index: getEvents,
  update: updateEvent,
  delete: deleteEntity('Event', 'EventId'),
})

createBasicRoutes('orders', {
  create: insertOrders,
  index: getOrders,
  update: updateEntity('Orders', 'OrderId'),
  delete: deleteEntity('Orders', 'OrderId'),
})

module.exports = router.routes()
