const PicDomainRepository = require('../Domain/Repository')
const PGClient = require('../../../Infrastructure/postgres')


class PostgresRepository extends PicDomainRepository {

    constructor() {
        super()
        this.client = new PGClient()
        this.tableName = 'pic'
    }

    retrieve(id) {
        const query = `SELECT id, name, url, created FROM ${this.tableName} WHERE id=${id}`
        return this.client.exec(query)
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
        return this.client.exec(query).then( () => ({'created': true}))
    }
}

module.exports = PostgresRepository