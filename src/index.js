const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const routes = require('./routes')

const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.use(routes)
app.listen(8000)
