import express from "express"
import config from './config'
import router from './routes/app'

const app = express()

app.use('/', router)

app.listen(config.port, () => {
    console.log(`API is listening on the port: ${config.port}`)
})
