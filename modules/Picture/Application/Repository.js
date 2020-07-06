const allowedMimes = ['image/jpeg', 'image/png']

class Pic {
    constructor(Repository) {
        this.repository = new Repository()
    }

    async get(id) {
        return await this.repository.retrieve(id)
    }

    async create(file) {
        if (file && allowedMimes.includes(file.mimetype)) {
            const data = {
                name: file.originalname,
                url: file.path
            }
            return await this.repository.create(data)
        } else {
            throw new Error("Archivo no válido")
        }
    }
}

module.exports = Pic
