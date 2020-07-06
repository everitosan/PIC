const { Client } = require('pg')
const config = require('../config')

class PostgresClient {
    constructor() {
        this.client = new Client({
            user: config.dbUser,
            password: config.dbPassword,
            host: config.dbHost,
            database: config.dbName,
            port: config.dbPort
        })
        this.client.connect()
        return this.client
    }
}

class PGClient {
    constructor() {
        if(!this.client) {
            this.client = new PostgresClient()
        }
        return this.client
    }
}

module.exports = PGClient