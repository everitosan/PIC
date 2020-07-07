const express = require('express')

const AlbumRepository = require('./Repository')
const AlbumService = require('../Application/Service')

const validate = require('../../../Infrastructure/validation')
const { createAlbumSchema } = require('./Model')

const registerAlbumApi = (app, basePath) => {
    const router = express.Router()
    app.use(basePath, router)

    const AlbumSrv = new AlbumService(AlbumRepository)

    router.get('/', async (_, res, next) => {
        try {
            const albums = await AlbumSrv.getAll()
            res.status(200).json({
                data: albums,
                message: 'Albums listed'
            })
        } catch(e) {
            next(e)
        }
    })

    router.post('/', validate(createAlbumSchema), async(req, res, next) => {
        try {
            const album = await AlbumSrv.create(req.body)
            res.status(201).json({
                data: album,
                message: 'Album created'
            })
        } catch(e) {
            next(e)
        }
    })

    router.get('/:id', async (req, res, next) => {
        try{
            const { id } = req.params
            const album = await AlbumSrv.get(id)
            res.status(200).json({
                data: album,
                message: 'Album retreived'
            })
        } catch(e) {
            next(e)
        }
    })

}

module.exports = registerAlbumApi