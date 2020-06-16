import Koa from 'koa'
import helmet from 'koa-helmet'
import env from 'dotenv'

// TODO: eslint, morgan, cors

env.config()

const app = new Koa()
const port = 3000

app.use(helmet())

app.use(async ctx => {
    ctx.body = 'Hello'
})

app.listen(port)
