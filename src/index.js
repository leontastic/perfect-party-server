const Koa = require('koa')
const cors = require('@koa/cors')
const routes = require('./routes')

const app = new Koa()

app.use(cors())
app.use(routes)
app.listen(8000)
