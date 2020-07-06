const PicDomainRepository = require('../Domain/Repository')
const PGClient = require('../../../Infrastructure/postgres')


class PostgresRepository extends PicDomainRepository {

    constructor() {
        super()
        this.client = new PGClient()
        this.tableName = 'Pic'
    }

    retrieve(id) {
        const query = `SELECT id, name, url, created FROM ${this.tableName} WHERE id=${id}`
        return this.exec(query)
            .then(res => {
                if (res.rows.length === 0) {
                    return null
                } else {
                    return (res.rows[0])
                }
            })
    }

    create(data) {
        const query = `INSERT into ${this.tableName} (name, url, created) VALUES ('${data.name}', '${data.url}', current_timestamp)`
        return this.exec(query).then( () => ({'created': true}))
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

module.exports = PostgresRepository