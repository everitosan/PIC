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
    }

    exec(query) {
        return new Promise((resolve, reject) => {
            this.client.query(query, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
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