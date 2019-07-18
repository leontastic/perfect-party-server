const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')
const db = require('./db/client')

const app = new Koa()
const router = new Router()

const getCurrentTime = async () => (await db.query('SELECT NOW()')).rows[0]

router.get('/current-time', async (ctx, next) => {
  ctx.body = await getCurrentTime();
})

app.use(cors())
app.use(router.routes())
app.listen(8000)
