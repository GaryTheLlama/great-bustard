import Koa from 'koa'
import helmet from 'koa-helmet'
import Twit from 'twit'
import env from 'dotenv'

// TODO: eslint, morgan, cors

env.config()

const app = new Koa()
const port = 3000

app.use(helmet())

// TODO: Add routes
app.use(async ctx => {
    ctx.body = await getListTweets()
})

app.listen(port)

const getListTweets = async () => {
    const t = new Twit({
        consumer_key: process.env.consumer_key,
        consumer_secret: process.env.consumer_secret,
        access_token: process.env.twitter_oauth_token,
        access_token_secret: process.env.twitter_oauth_token_secret,
    })

    const list_id = process.env.list_id
    const include_rts = false
    const opts = {
        list_id,
        include_rts
    }
    
    return await t.get('lists/statuses', opts)
        .then(({data}) => {            
            return data.map(tweet => {
                return {
                    created_at: tweet.created_at,
                    text: tweet.text,
                    user_name: tweet.user.name,
                    user_screen_name: tweet.user.screen_name,
                    user_description: tweet.user.description,
                }
            })
        })
}
