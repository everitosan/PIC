const express = require('express')
const config = require('./config')

const app = express()
const port = config.port
app.use(express.json)



app.listen(port, ()=> {
    console.log(`Pic en ${port}`)
})