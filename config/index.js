const dotenv = require('dotenv')
dotenv.config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.POSTGRES_USER,
    dbPassword: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
    dbPort: process.env.POSTGRES_PORT,
    dbHost: process.env.POSTGRES_HOST
}


module.exports = config