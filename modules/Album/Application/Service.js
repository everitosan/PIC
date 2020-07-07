/**
 * Este modulo define los casos de uso
 */

class Album {

    constructor(Repository) {
        this.repository = new Repository()
    }

    async getAll() {
        const albums = await this.repository.list()
        return albums
    }

    async get(id) {
        const album = await this.repository.retrieve(id)
        return album
    }

    async create(data) {
        const album = await this.repository.create(data)
        return album
    }

    async delete(id) {
        const albumDeletedId = await this.repository.delete(id)
        return albumDeletedId
    }
}

module.exports = Album