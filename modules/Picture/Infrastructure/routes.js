const express = require('express')
const multer = require('multer')
const upload = multer({ dest : 'pics' })

const PostgresPicRepository = require('./Repository')
const Pic = require('../Application/Repository')

const registerPicApi = (app, basePath) => {
    const router = express.Router()
    const picRepository = new Pic(PostgresPicRepository)

    app.use(basePath, router)

    router.get('/:id', async (req, res,  next) => {
        try {

            const {id} = req.params
            const picture = await picRepository.get(id)
            
            res.status(200).json({
                data: picture,
                message: 'Picture retreived'
            })
        } catch(e) {
            next(e)
        }
    })

    router.post('/', upload.single('image'), async (req, res, next) => {
        try {
            const picture = await picRepository.create(req.file)
            
            res.status(201).json({
                data: picture,
                message: 'Picture created'
            })
        } catch (e) {
            next(e)
        }
    })

    router.delete('/:id', (req, res) => {
        const {id} = req.params
        const deletedId = picRepository.delete(id)

        res.status(200).json({
            data: deletedId,
            message: 'Picture deleted'
        })
    })
}

module.exports = registerPicApi