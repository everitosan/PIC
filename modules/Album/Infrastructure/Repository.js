const PGClient = require('../../../Infrastructure/postgres')
const AlbumDomainRepository = require('../Domain/Respository')

class AlbumRepository extends AlbumDomainRepository {

    constructor() {
        super()
        this.client = new PGClient()
        this.tableName = 'album'
    }

    list() {
        const query = `SELECT id, name, created FROM ${this.tableName};`
        return this.client.exec(query)
            .then(res => {
                return res.rows
            })
    }

    create(data) {
        const query = `INSERT into ${this.tableName} (name, created) VALUES ('${data.name}', current_timestamp)`
        return this.client.exec(query).then( ()=> ({'created': true}) )
    }

    retrieve(id) {
        const query = `SELECT id, name, created FROM ${this.tableName} WHERE id=${id}`
        return this.client.exec(query).then(res => { 
            if (res.rows.length === 0) {
                return null
            } else {
                return res.rows[0]
            }
        })
    }


}

module.exports = AlbumRepository