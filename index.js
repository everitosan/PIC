const express = require('express')
const config = require('./config')

const registerAlbumApi = require('./modules/Album/Infrastructure/routes')
const registerPicApi = require('./modules/Picture/Infrastructure/routes')

const app = express()
const port = config.port
app.use(express.json())

registerPicApi(app, '/api/pictures')
registerAlbumApi(app, '/api/albums')

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`)
})


app.listen(port, ()=> {
    console.log(`Pic en http://localhost:${port}`)
})