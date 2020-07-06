const express = require('express')
const config = require('./config')

const registerPicApi = require('./modules/Picture/Infrastructure/routes')

const app = express()
const port = config.port
app.use(express.json())

registerPicApi(app, '/api/pictures')


app.listen(port, ()=> {
    console.log(`Pic en http://localhost:${port}`)
})